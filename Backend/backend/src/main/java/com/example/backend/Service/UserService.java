package com.example.backend.Service;

import com.example.backend.Payload.UserDTO;

import java.util.List;

public interface UserService {
    UserDTO addUser(UserDTO userDTO);
    UserDTO getUserById(int user_id);
    void deleteUser(int user_id);
    List<UserDTO> getAllUsers();
}
