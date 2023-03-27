package com.example.backend.Controller;

import com.example.backend.Model.Product;
import com.example.backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        System.out.println(product.getProduct_name());
        Product addedProduct = productService.addProduct(product);
        return new ResponseEntity<Product>(addedProduct,HttpStatus.CREATED);
    }

    //View all products
    @GetMapping("/viewAll")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> allProducts = productService.getAllProducts();
        return new ResponseEntity<List<Product>>(allProducts,HttpStatus.ACCEPTED);
    }

    //view product by id
    @GetMapping("/viewById")
    public ResponseEntity<Product> getProductById(@RequestParam int product_id){
        Product productById = productService.getProductById(product_id);
        return new ResponseEntity<Product>(productById,HttpStatus.OK);
    }

    //delete product by product id
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteProduct(@RequestParam int product_id){
        productService.deleteProduct(product_id);
        return new ResponseEntity<String>("Product Deleted",HttpStatus.OK);
    }

    //update product details by product id
    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestParam int product_id, @RequestBody Product new_product){
        Product updatedProduct = productService.updateProduct(product_id,new_product);
        return new ResponseEntity<Product>(updatedProduct,HttpStatus.ACCEPTED);
    }



}
