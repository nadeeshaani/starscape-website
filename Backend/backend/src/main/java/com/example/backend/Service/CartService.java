package com.example.backend.Service;

import com.example.backend.Payload.CartDTO;
import com.example.backend.Payload.ItemRequest;

public interface CartService {
    CartDTO addItem(ItemRequest item, String email);
    CartDTO getCartAll(String email);

}