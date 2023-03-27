package com.example.backend.Repository;

import com.example.backend.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    public Product findById(int product_id);
}
