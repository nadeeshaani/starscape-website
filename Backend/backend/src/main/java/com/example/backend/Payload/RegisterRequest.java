package com.example.backend.Controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String user_name;
    private String email;
    private String user_password;
    private String user_address;
    private String user_gender;
    private String user_contact;
}
