package com.example.backend.Controller;

import com.example.backend.Model.Order_;
import com.example.backend.Payload.ApiResponse;
import com.example.backend.Payload.OrderDTO;
import com.example.backend.Payload.OrderRequest;
import com.example.backend.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    //create order
    @PostMapping("/add")
    public ResponseEntity<OrderDTO> createOrder(@RequestBody OrderRequest orderRequest, Principal principal){
        String email = principal.getName();
        OrderDTO order = this.orderService.orderCreate(orderRequest, email);
        return new ResponseEntity<OrderDTO>(order, HttpStatus.CREATED);
    }


}