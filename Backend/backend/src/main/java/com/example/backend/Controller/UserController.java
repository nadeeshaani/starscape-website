package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Payload.UserDTO;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    //Adding new users
    @PostMapping("/add")
    public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO userDTO){
        UserDTO addedUser = this.userService.addUser(userDTO);
        return new ResponseEntity<UserDTO>(addedUser, HttpStatus.CREATED);
    }

    //Viewing users By id
    @GetMapping("/viewById")
    public ResponseEntity<UserDTO> getUserById(@RequestParam int user_id){
        UserDTO userById = this.userService.getUserById(user_id);
        return new ResponseEntity<UserDTO>(userById, HttpStatus.FOUND);
    }

    //delete user
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteUser(@RequestParam int user_id){
        this.userService.deleteUser(user_id);
        return new ResponseEntity<String>("User Deleted",HttpStatus.OK);

    }

    //View all users
    @GetMapping("/viewAll")
    public ResponseEntity<List<UserDTO>> viewAllUsers(){
        List<UserDTO> allUsers =  this.userService.getAllUsers();
        return new ResponseEntity<List<UserDTO>>(allUsers, HttpStatus.ACCEPTED);
    }

}

//todo have to change this class endpoints