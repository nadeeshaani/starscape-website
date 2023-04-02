package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.*;
import com.example.backend.Payload.OrderDTO;
import com.example.backend.Payload.OrderRequest;
import com.example.backend.Repository.CartRepository;
import com.example.backend.Repository.OrderRepository;
import com.example.backend.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    ModelMapper modelMapper;

    @Override
    public OrderDTO orderCreate(OrderRequest orderRequest, String email) {
        //fetch user
        User user = this.userRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User not found"));

        int cart_id = orderRequest.getCart_id();
        String order_address = orderRequest.getOrder_address();

        //fetch cart
        Cart cart = this.cartRepository.findById(cart_id).orElseThrow(()->new ResourceNotFoundException("Cart not found"));

        //Getting cart items
        Set<CartItem> items = cart.getItems();

        Order_ order = new Order_();

        AtomicReference<Double> totalOrderPrice = new AtomicReference<Double>(0.0);
        Set<OrderItem> orderItems = items.stream().map((cartItem)->{
            OrderItem orderItem = new OrderItem();

            //set cartItem into OrderItem

            //1.Set product in orderItem
            orderItem.setProduct(cartItem.getProduct());

            //2.Set product quantity in orderItem
            orderItem.setProduct_quantity(cartItem.getQuantity());

            //3.Set total product price to orderItem
            orderItem.setTotal_product_price(cartItem.getTotalprice());

            //set order to oderItem
            orderItem.setOrder(order);

            totalOrderPrice.set(totalOrderPrice.get() + orderItem.getTotal_product_price());

            int product_id = orderItem.getProduct().getProduct_id();

            return orderItem;
        }).collect(Collectors.toSet());

        order.setBilling_address(order_address);
        order.setOrder_delivered(null);
        order.setOrder_status("CREATED");
        order.setPayment_status("NOT PAID");
        order.setUser(user);
        order.setOrderItem(orderItems);
        order.setOrder_amount(totalOrderPrice.get());
        order.setOrder_created(new Date());

        Order_ save;
        if(order.getOrder_amount() > 0){
            save = this.orderRepository.save(order);
            //cart is cleared after order created
            cart.getItems().clear();
            this.cartRepository.save(cart);
        }else{
            throw new ResourceNotFoundException("Please add items to cart and place the order");
        }

        return this.modelMapper.map(save, OrderDTO.class);
    }
}
