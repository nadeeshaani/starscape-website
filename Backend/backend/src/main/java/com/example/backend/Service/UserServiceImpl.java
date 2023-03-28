package com.example.backend.Service;

import com.example.backend.Model.User;
import com.example.backend.Payload.UserDTO;
import com.example.backend.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public UserDTO addUser(UserDTO userDTO) {
        return null;
    }

    @Override
    public UserDTO getUserById(int user_id) {
        return null;
    }

    @Override
    public void deleteUser(int user_id) {

    }

    @Override
    public List<UserDTO> getAllUsers() {
        return null;
    }
}
