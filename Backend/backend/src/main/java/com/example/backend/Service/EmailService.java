package com.example.backend.Service;

public interface EmailService {
    void send(String to, String email, String subject);
}
