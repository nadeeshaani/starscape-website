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
@CrossOrigin(origins = "http://localhost:3000")
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
    //cancel order by id
    @DeleteMapping("/delete")
    public ResponseEntity<?> cancelOrderById(@RequestParam int order_id){
        this.orderService.cancelOrder(order_id);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Order canceled",true),HttpStatus.OK);
    }

    //find order by id
    @GetMapping("/viewById")
    public ResponseEntity<OrderDTO> findOrderById(@RequestParam int order_id){
        OrderDTO order = this.orderService.findOrderById(order_id);
        return new ResponseEntity<OrderDTO>(order, HttpStatus.ACCEPTED);
    }


}