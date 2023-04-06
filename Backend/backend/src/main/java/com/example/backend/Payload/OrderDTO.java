package com.example.backend.Payload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private int order_id;

    private String order_status;
    private String payment_status;
    private Date order_delivered;
    private double order_amount;
    private String billing_address;
    private Date order_created;

    private UserDTO user;

    private Set<OrderItemDTO> orderItem = new HashSet<>();
}
