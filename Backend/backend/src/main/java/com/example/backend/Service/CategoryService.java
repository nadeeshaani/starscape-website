package com.example.backend.Service;

import com.example.backend.Model.Category;
import com.example.backend.Payload.CategoryDTO;

import java.util.List;

public interface CategoryService {
    CategoryDTO addCategory(CategoryDTO category);
    CategoryDTO getCategoryById(int category_id);
    List<CategoryDTO> getAllCategories();
    CategoryDTO updateCategory(int category_id, CategoryDTO category);
    void deleteCategory(int category_id);
}
