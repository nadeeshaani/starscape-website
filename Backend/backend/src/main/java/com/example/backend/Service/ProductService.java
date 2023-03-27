package com.example.backend.Service;

import com.example.backend.Model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Product addProduct(Product product);
    List<Product> getAllProducts();
    Product getProductById(int product_id);
    void deleteProduct(int product_id);

    Product updateProduct(int product_id,Product new_product);

}
