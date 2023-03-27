package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Category;
import com.example.backend.Model.Product;
import com.example.backend.Payload.ProductDTO;
import com.example.backend.Repository.CategoryRepository;
import com.example.backend.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public ProductDTO addProduct(ProductDTO product, int category_id) {
        //Fetch category is available or not
        Category category = this.categoryRepository.findById(category_id).orElseThrow(()->new ResourceNotFoundException("This category ID is not found"));

        //ProductDTO to Product conversion
        Product entity = toEntity(product);

        //set the category of the product
        entity.setCategory(category);

        //save the product
        Product save = productRepository.save(entity);

        //Product to ProductDTO conversion
        ProductDTO dto = toDTO(save);
        return dto;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        List<Product> allProducts = productRepository.findAll();

        //Product to ProductDTO conversion
        List<ProductDTO> allProductDTOs = allProducts.stream().map(product -> this.toDTO(product)).collect(Collectors.toList());
        return allProductDTOs;
    }

    @Override
    public ProductDTO getProductById(int product_id) {
        Product productById = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));

        //Product to ProductDTO conversion
        ProductDTO dto = toDTO(productById);
        return dto;
    }

    @Override
    public void deleteProduct(int product_id) {
        Product productById = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));
        productRepository.delete(productById);
    }

    @Override
    public ProductDTO updateProduct(int product_id, ProductDTO new_product) {
        Product old_product = productRepository.findById(product_id).orElseThrow(()->new ResourceNotFoundException("Product not found."));
        old_product.setProduct_name(new_product.getProduct_name());
        old_product.setProduct_imageName(new_product.getProduct_imageName());
        old_product.setLive(new_product.isLive());
        old_product.setStatus(new_product.isStatus());
        old_product.setProduct_price(new_product.getProduct_price());
        old_product.setProduct_description(new_product.getProduct_description());
        old_product.setProduct_quantity(new_product.getProduct_quantity());

        Product updatedProduct = productRepository.save(old_product);
        ProductDTO dto = toDTO(updatedProduct);
        return dto;
    }

    //ProductDTO to Product
    public Product toEntity(ProductDTO productDTO){
        Product product = new Product();
        product.setProduct_name(productDTO.getProduct_name());
        product.setProduct_id(productDTO.getProduct_id());
        product.setProduct_quantity(productDTO.getProduct_quantity());
        product.setProduct_price(productDTO.getProduct_price());
        product.setProduct_description(productDTO.getProduct_description());
        product.setProduct_imageName(productDTO.getProduct_imageName());
        product.setStatus(productDTO.isStatus());
        product.setLive(product.isLive());
        return product;
    }

    //Product to ProdcutDTO
    public ProductDTO toDTO(Product product){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProduct_name(product.getProduct_name());
        productDTO.setProduct_price(product.getProduct_price());
        productDTO.setProduct_id(product.getProduct_id());
        productDTO.setProduct_description(product.getProduct_description());
        productDTO.setProduct_imageName(product.getProduct_imageName());
        productDTO.setProduct_quantity(product.getProduct_quantity());
        productDTO.setLive(product.isLive());
        productDTO.setStatus(product.isStatus());

        return productDTO;
    }

}
