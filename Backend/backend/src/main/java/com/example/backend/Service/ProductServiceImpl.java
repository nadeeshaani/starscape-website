package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Product;
import com.example.backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product addProduct(Product product) {
        Product save = productRepository.save(product);
        return save;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();
        return allProducts;
    }

    @Override
    public Product getProductById(int product_id) {
        Product productById = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));
        return productById;
    }

    @Override
    public void deleteProduct(int product_id) {
        Product productById = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));
        productRepository.delete(productById);
    }

    @Override
    public Product updateProduct(int product_id, Product new_product) {
        Product old_product = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));
        old_product.setProduct_name(new_product.getProduct_name());
        old_product.setProduct_imageName(new_product.getProduct_imageName());
        old_product.setLive(new_product.isLive());
        old_product.setStatus(new_product.isStatus());
        old_product.setProduct_price(new_product.getProduct_price());
        old_product.setProduct_description(new_product.getProduct_description());
        old_product.setProduct_quantity(new_product.getProduct_quantity());

        Product updatedProduct = productRepository.save(old_product);
        return updatedProduct;
    }
}
