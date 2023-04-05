package com.example.backend.Controller;

import com.example.backend.Model.Product;
import com.example.backend.Payload.ProductDTO;
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
    public ResponseEntity<ProductDTO> addProduct(@RequestBody ProductDTO product, @RequestParam int category_id){
        ProductDTO addedProduct = productService.addProduct(product, category_id);
        return new ResponseEntity<ProductDTO>(addedProduct,HttpStatus.CREATED);
    }

    //View all products
    @GetMapping("/viewAll")
    public ResponseEntity<List<ProductDTO>> getAllProducts(){
        List<ProductDTO> allProducts = productService.getAllProducts();
        return new ResponseEntity<List<ProductDTO>>(allProducts,HttpStatus.ACCEPTED);
    }

    //view product by id
    @GetMapping("/viewById")
    public ResponseEntity<ProductDTO> getProductById(@RequestParam int product_id){
        ProductDTO productById = productService.getProductById(product_id);
        return new ResponseEntity<ProductDTO>(productById,HttpStatus.OK);
    }

    //delete product by product id
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteProduct(@RequestParam int product_id){
        productService.deleteProduct(product_id);
        return new ResponseEntity<String>("Product Deleted",HttpStatus.OK);
    }

    //update product details by product id
    @PutMapping("/update")
    public ResponseEntity<ProductDTO> updateProduct(@RequestParam int product_id, @RequestBody ProductDTO new_product){
        ProductDTO updatedProduct = productService.updateProduct(product_id,new_product);
        return new ResponseEntity<ProductDTO>(updatedProduct,HttpStatus.ACCEPTED);
    }

    //Find products by category
    @GetMapping("/viewByCategory")
    public ResponseEntity<List<ProductDTO>> getProductByCategory(@RequestParam int category_id){
        List<ProductDTO> productsByCategory = productService.getProductsByCategory(category_id);
        return new ResponseEntity<List<ProductDTO>>(productsByCategory, HttpStatus.ACCEPTED);
    }

    //Search products by keyword
    @GetMapping("/search")
    public ResponseEntity<List<ProductDTO>> search(@RequestParam String keyword){
        List<ProductDTO> productsByCategory = productService.search(keyword);
        return new ResponseEntity<List<ProductDTO>>(productsByCategory, HttpStatus.ACCEPTED);
    }

}
