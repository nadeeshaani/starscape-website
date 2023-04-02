package com.example.backend.Service;

import com.example.backend.Payload.OrderDTO;
import com.example.backend.Payload.OrderRequest;

public interface OrderService {
    OrderDTO orderCreate(OrderRequest orderRequest, String email);
}