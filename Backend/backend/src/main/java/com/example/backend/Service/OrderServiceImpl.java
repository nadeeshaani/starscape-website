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

    @Autowired
    private EmailService emailService;

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
        order.setOrder_amount(Math.round(totalOrderPrice.get() * 100.0) / 100.0);
        order.setOrder_created(new Date());

        Order_ save;
        if(order.getOrder_amount() > 0){
            save = this.orderRepository.save(order);
            emailService.send(
                    user.getEmail(),
                    buildEmail(order),
                    "Order Confirmation");

            //cart is cleared after order created
            cart.getItems().clear();
            this.cartRepository.save(cart);
        }else{
            throw new ResourceNotFoundException("Please add items to cart and place the order");
        }

        return this.modelMapper.map(save, OrderDTO.class);
    }


    private String buildEmail(Order_ order) {
        String orderItemsList = "";
        Set<OrderItem> orderItems = order.getOrderItem();
        for (OrderItem orderItem : orderItems) {
            String productName = orderItem.getProduct().getProduct_name();
            int quantity = orderItem.getProduct_quantity();
            double totalProductPrice = orderItem.getTotal_product_price(),rou;
            orderItemsList += "<tr><td style='padding: 10px; border: 1px solid #ddd;'>" + productName + "</td><td style='padding: 10px; border: 1px solid #ddd;'>" + quantity + "</td><td style='padding: 10px; border: 1px solid #ddd;'>" + totalProductPrice + "</td></tr>";
        }

        String emailBody = "<html><body>"
                + "<div style='font-family: Arial, sans-serif;'>"
                + "<div style='background-color: #007bff; color: #fff; padding: 10px;'><h2>Order Confirmation</h2></div>"
                + "<div style='padding: 20px;'>"
                + "<p>Dear " + order.getUser().getFirst_name() + ",</p>"
                + "<p>Thank you for placing your order with us. Below are the details of your order:</p>"
                + "<table style='border-collapse: collapse; width: 100%;'><tr style='background-color: #f2f2f2;'><th style='padding: 10px; border: 1px solid #ddd;'>Product</th><th style='padding: 10px; border: 1px solid #ddd;'>Quantity</th><th style='padding: 10px; border: 1px solid #ddd;'>Total Price</th></tr>"
                + orderItemsList
                + "<tr><td colspan='2' style='text-align: right; padding: 10px; border: 1px solid #ddd;'><strong>Total Order Amount:</strong></td><td style='padding: 10px; border: 1px solid #ddd;'><strong>" + order.getOrder_amount() + "</strong></td></tr>"
                + "</table>"
                + "<p>Your order is being processed and will be delivered soon.</p>"
                + "</div></div>"
                + "</body></html>";

        return emailBody;
    }


    @Override
    public void cancelOrder(int order_id) {
        Order_ order = this.orderRepository.findById(order_id).orElseThrow(()-> new ResourceNotFoundException("Order not found"));
        this.orderRepository.delete(order);
    }

    @Override
    public OrderDTO findOrderById(int order_id) {
        Order_ order = this.orderRepository.findById(order_id).orElseThrow(()-> new ResourceNotFoundException("Order not found"));
        return this.modelMapper.map(order, OrderDTO.class);
    }

}
