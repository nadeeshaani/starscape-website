package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.User;
import com.example.backend.Payload.UserDTO;
import com.example.backend.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public UserDTO addUser(UserDTO userDTO) {
        //userDTo to User conversion
        User user = this.mapper.map(userDTO, User.class);

        //saving..
        User save = this.userRepository.save(user);

        //User to UserDTO
        UserDTO saveDTo = this.mapper.map(save, UserDTO.class);
        return saveDTo;
    }

    @Override
    public UserDTO getUserById(int user_id) {
        User userById = this.userRepository.findById(user_id).orElseThrow(()->new ResourceNotFoundException("User does not exist"));
        UserDTO userByIdDTO = this.mapper.map(userById, UserDTO.class);
        return userByIdDTO;
    }

    @Override
    public void deleteUser(int user_id) {
        User user = this.userRepository.findById(user_id).orElseThrow(()->new ResourceNotFoundException("User does not exist"));
        this.userRepository.delete(user);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> allUsers = this.userRepository.findAll();
        List<UserDTO> allUserDtos = allUsers.stream().map(each->this.mapper.map(each, UserDTO.class)).collect(Collectors.toList());
        return allUserDtos;
    }
}
