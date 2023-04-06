package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Cart;
import com.example.backend.Model.CartItem;
import com.example.backend.Model.Product;
import com.example.backend.Model.User;
import com.example.backend.Payload.CartDTO;
import com.example.backend.Payload.ItemRequest;
import com.example.backend.Repository.CartRepository;
import com.example.backend.Repository.ProductRepository;
import com.example.backend.Repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ModelMapper mapper;

    @Override
    public CartDTO addItem(ItemRequest item, String email) {
        int product_id = item.getProduct_id();
        int quantity = item.getQuantity();

        //fetch user
        User user = this.userRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User not found"));

        //fetch product
        Product product = this.productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found"));

        //If the produxt is unavailable in stock
        if(!product.isStatus()){
            new ResourceNotFoundException("Product out of Stock");
        }

        //create cartItem with product_id and quantity
        CartItem cartItem = new CartItem();
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        double totalprice = Math.round(product.getProduct_price()*quantity * 100.0) / 100.0;
        cartItem.setTotalprice(totalprice);

        //getting cart from user
        Cart cart = user.getCart();

        if(cart == null){
            cart = new Cart();
            cart.setUser(user);
        }

        cartItem.setCart(cart);
        Set<CartItem> items = cart.getItems();

        //Check item is available in cart or not
        //if CartItem is available then we increase the quantity only else
        // add new product in cartItem

        //by default false
        AtomicReference<Boolean> flag = new AtomicReference<>(false);

        Set<CartItem> newproduct = items.stream().map((i) ->{
            if(i.getProduct().getProduct_id() == product.getProduct_id()){
                i.setQuantity(quantity);
                i.setTotalprice(totalprice);
                flag.set(true);
            }
            return i;
        }).collect(Collectors.toSet());

        if(flag.get()){
            items.clear();
            items.addAll(newproduct);
        }else{
            cartItem.setCart(cart);
            items.add(cartItem);
        }

        Cart saveCart = this.cartRepository.save(cart);

        return this.mapper.map(saveCart, CartDTO.class);
    }

    @Override
    public CartDTO getCartAll(String email) {
        //find user
        User user = this.userRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User not found"));

        //find Cart
        Cart cart = this.cartRepository.findByUser(user).orElseThrow(()->new ResourceNotFoundException("There is no cart"));
        return this.mapper.map(cart,CartDTO.class);
    }

    @Override
    public CartDTO getCartById(int cart_id) {
        Cart cartById = this.cartRepository.findById(cart_id).orElseThrow(()->new ResourceNotFoundException("Cart not found"));

        return this.mapper.map(cartById, CartDTO.class);
    }

    @Override
    public CartDTO removeCartItemFromCart(String email, int product_id) {
        User user = this.userRepository.findByEmail(email).orElseThrow(()->new ResourceNotFoundException("User not found"));
        Cart cart = user.getCart();
        Set<CartItem> items = cart.getItems();

        boolean removeIf = items.removeIf((i)->i.getProduct().getProduct_id() == product_id);
        Cart save = this.cartRepository.save(cart);
        return this.mapper.map(save, CartDTO.class);
    }
}
