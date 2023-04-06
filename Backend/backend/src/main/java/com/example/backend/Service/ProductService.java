package com.example.backend.Service;

import com.example.backend.Model.Product;
import com.example.backend.Payload.ProductDTO;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    ProductDTO addProduct(ProductDTO product, int category_id);
    List<ProductDTO> getAllProducts();
    ProductDTO getProductById(int product_id);
    void deleteProduct(int product_id);

    ProductDTO updateProduct(int product_id,ProductDTO new_product);
    List<ProductDTO> getProductsByCategory(int category_id);

    List<ProductDTO> search(String keyword);
}
