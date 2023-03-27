package com.example.backend.Controller;

import com.example.backend.Model.Product;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    @ResponseBody
    //add products
    public Product addProduct(@RequestBody Product product){
        System.out.println(product.getProduct_name());
        Product addedProduct = productService.addProduct(product);
        return addedProduct;
    }

    //View all products
    @GetMapping("/viewAll")
    public List<Product> getAllProducts(){
        List<Product> allProducts = productService.getAllProducts();
        return allProducts;
    }

    //view product by id
    @GetMapping("/viewById")
    public Product getProductById(@RequestParam int product_id){
        Product productById = productService.getProductById(product_id);
        return productById;
    }

    //delete product by product id
    @DeleteMapping("/delete")
    public void deleteProduct(@RequestParam int product_id){
        productService.deleteProduct(product_id);
    }

    //update product details by product id
    @PutMapping("/update")
    public Product updateProduct(@RequestParam int product_id, @RequestBody Product new_product){
        Product updatedProduct = productService.updateProduct(product_id,new_product);
        return updatedProduct;
    }



}
