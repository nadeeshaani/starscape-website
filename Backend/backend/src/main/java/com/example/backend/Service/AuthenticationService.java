package com.example.backend.Service;

import com.example.backend.Model.Role;
import com.example.backend.Model.Token.Token;
import com.example.backend.Model.Token.TokenType;
import com.example.backend.Model.User;
import com.example.backend.Payload.AuthenticationRequest;
import com.example.backend.Payload.AuthenticationResponse;
import com.example.backend.Payload.UserDTO;
import com.example.backend.Repository.TokenRepository;
import com.example.backend.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private final AuthenticationManager authenticationManager;
    @Autowired
    private final TokenRepository tokenRepository;
    @Autowired
    private final EmailValidator emailValidator;
    @Autowired
    private final EmailService emailService;

    public AuthenticationResponse register(UserDTO request) {
        var user = User.builder()
                .first_name(request.getFirst_name())
                .last_name(request.getLast_name())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        boolean isValidEmail = emailValidator.
                test(request.getEmail());
        if (!isValidEmail) {
            throw new IllegalStateException("Invalid Email Address");
        }

        var savedUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        String link = "http://localhost:8090/api/v1/auth/confirm?token=" + jwtToken;
        emailService.send(
                request.getEmail(),
                buildEmail(request.getFirst_name(), link),
                "Welcome to Starscape");
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private void saveUserToken(User user, String jwtToken) {
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false).expiredAt(LocalDateTime.now().plusMinutes(16))
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Transactional
    public String confirmToken(String token) {
        Token confirmationToken = tokenRepository
                .findByToken(token)
                .orElseThrow(() ->
                        new IllegalStateException("token not found"));

        if (confirmationToken.getConfirmedAt() != null) {
            throw new IllegalStateException("Email already confirmed");
        }

        LocalDateTime expiredAt = confirmationToken.getExpiredAt();

        if (expiredAt.isBefore(LocalDateTime.now())) {
            throw new IllegalStateException("Token expired");
        }

        tokenRepository.updateConfirmedAt(token,LocalDateTime.now());
        userRepository.verifyUser(
                confirmationToken.getUser().getEmail());
        return "Verified Email Successfully";
    }

    private String buildEmail(String name, String link) {
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "  <head>\n" +
                "    <title>Email Verification</title>\n" +
                "    <style>\n" +
                "      body {font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333333; background-color: #f8f8f8; margin: 0; padding: 0;}\n" +
                "      h1 {font-size: 24px; font-weight: bold; margin-top: 0;}\n" +
                "      p {margin-top: 0; margin-bottom: 1em;}\n" +
                "      a {color: #0066cc; text-decoration: none;}\n" +
                "      a:hover {text-decoration: underline;}\n" +
                "    </style>\n" +
                "  </head>\n" +
                "  <body>\n" +
                "    <table style=\"width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #cccccc;\">\n" +
                "      <tr><td style=\"padding: 20px;\">\n" +
                "        <h1>Email Verification</h1>\n" +
                "        <p>Dear "+ name +",</p>\n" +
                "        <p>Thank you for creating an account with us. Before you can start using your account, we need to verify your email address:</p>\n" +
                "        <p>Please click on the following link to verify your email address:</p>\n" +
                "        <p><a href="+link+">Verify Email Address</a></p>\n" +
                "        <p>If you did not create an account with us, please ignore this email.</p>\n" +
                "        <p>Thank you!</p>\n" +
                "        <p>Sincerely,<br>Starscape Team</p>\n" +
                "      </td></tr>\n" +
                "    </table>\n" +
                "  </body>\n" +
                "</html>\n";
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow();

        //Optional, recheck this portion. Should it belong to authentication?
        if (user.getRole() == Role.USER && !user.isVerified()) {
            throw new RuntimeException("User is not verified");
        }

        var jwtToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


}
