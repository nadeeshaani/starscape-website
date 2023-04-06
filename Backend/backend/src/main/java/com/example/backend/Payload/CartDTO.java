package com.example.backend.Payload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {
    private int cartId;
    private Set<CartItemDTO> items = new HashSet<>();
    private UserDTO user;
}

