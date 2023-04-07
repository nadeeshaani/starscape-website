package com.example.backend.Payload;

import org.springframework.web.bind.annotation.CrossOrigin;

public class OrderRequest {
    private String order_address;
    private int cart_id;

    public String getOrder_address() {
        return order_address;
    }

    public void setOrder_address(String order_address) {
        this.order_address = order_address;
    }

    public int getCart_id() {
        return cart_id;
    }

    public void setCart_id(int cart_id) {
        this.cart_id = cart_id;
    }
}