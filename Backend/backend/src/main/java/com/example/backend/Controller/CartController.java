package com.example.backend.Controller;

import com.example.backend.Payload.CartDTO;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<CartDTO> addToCart(@RequestBody ItemRequest itemRequest, Principal principal){
        String email = principal.getName();
        System.out.println(email);
        CartDTO addItem = this.cartService.addItem(itemRequest,principal.getName());
        return new ResponseEntity<CartDTO>(addItem, HttpStatus.OK);
    }

    //getting all carts
    @GetMapping("/getCart")
    public ResponseEntity<CartDTO> getAllCart(Principal principal){
        CartDTO allCart = this.cartService.getCartAll(principal.getName());
        return new ResponseEntity<CartDTO>(allCart, HttpStatus.ACCEPTED);
    }
}