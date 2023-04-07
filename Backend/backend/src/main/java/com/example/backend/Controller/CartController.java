package com.example.backend.Controller;

import com.example.backend.Payload.CartDTO;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Service.CartService;
import com.example.backend.Service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/add")
    public ResponseEntity<CartDTO> addToCart(@RequestBody ItemRequest itemRequest, @RequestParam("jwtToken") String jwtToken){
        CartDTO addItem = this.cartService.addItem(itemRequest,jwtService.extractUsername(jwtToken));
        return new ResponseEntity<CartDTO>(addItem, HttpStatus.OK);
    }

    //getting all carts
    @GetMapping("/getCart")
    public ResponseEntity<CartDTO> getAllCart(@RequestParam("jwtToken") String jwtToken){
        CartDTO allCart = this.cartService.getCartAll(jwtService.extractUsername(jwtToken));
        return new ResponseEntity<CartDTO>(allCart, HttpStatus.ACCEPTED);
    }

    //getting cart by id
    @GetMapping("/getCartById")
    public ResponseEntity<CartDTO> getCartById(@RequestParam int cart_id){
        CartDTO cartById = this.cartService.getCartById(cart_id);
        return new ResponseEntity<CartDTO>(cartById, HttpStatus.OK);
    }

    //removing cart item from cart
    @DeleteMapping("/delete")
    public ResponseEntity<CartDTO> deleteCartItemFromCart(@RequestParam int product_id, Principal principal){
        CartDTO remove = this.cartService.removeCartItemFromCart(principal.getName(), product_id);
        return new ResponseEntity<CartDTO>(remove, HttpStatus.UPGRADE_REQUIRED);
    }
}