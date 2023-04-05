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
        order.setOrder_amount(totalOrderPrice.get());
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
        return "<!DOCTYPE html>\n" +
                "<html>\n" +
                "  <head>\n" +
                "    <title>Order Confirmation</title>\n" +
                "    <style>\n" +
                "      body{font:16px/1.5 Arial,sans-serif;margin:0}\n" +
                "      h1{font:bold 28px Arial,sans-serif;text-align:center}\n" +
                "      table{border-collapse:collapse;margin-bottom:20px;width:100%}\n" +
                "      th,td{border:1px solid #ddd;padding:8px;text-align:left}\n" +
                "      th{background:#f2f2f2;font-weight:bold}\n" +
                "      tfoot tr:first-child{font-weight:bold}\n" +
                "      tfoot td:first-child{text-align:right}\n" +
                "      p{margin-bottom:10px}\n" +
                "    </style>\n" +
                "  </head>\n" +
                "  <body>\n" +
                "    <h1>Order Confirmation</h1>\n" +
                "    <p>Dear"+order.getUser().getFirst_name()+",</p>\n" +
                "    <p>Thank you for placing your order with us. Your order details are as follows:</p>\n" +
                "    <table>\n" +
                "      <thead><tr><th>Item</th><th>Quantity</th><th>Price</th></tr></thead>\n" +
                "      <tbody th:each=\"item : ${order.items}\"><tr><td th:text=\"${item.name}\"></td><td th:text=\"${item.quantity}\"></td><td th:text=\"${item.price}\"></td></tr></tbody>\n" +
                "      <tfoot><tr><td colspan=\"2\">Subtotal:</td><td th:text=\"${order.subtotal}\"></td></tr><tr><td colspan=\"2\">Shipping:</td><td th:text=\"${order.shippingCost}\"></td></tr><tr><td colspan=\"2\">Tax:</td><td th:text=\"${order.tax}\"></td></tr><tr><td colspan=\"2\">Total:</td><td th:text=\"${order.total}\"></td></tr></tfoot>\n" +
                "    </table>\n" +
                "    <p>Your order will be shipped to:</p>\n" +
                "    <p th:text=\"${order.shippingAddress}\"></p>\n" +
                "    <p>Estimated delivery date: [[${order.deliveryDate}]]</p>\n" +
                "    <p>Thank you for your business!</p>\n" +
                "    <p>Sincerely,<br>[Your Company Name]</p>\n" +
                "  </body>\n" +
                "</html>\n";
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
