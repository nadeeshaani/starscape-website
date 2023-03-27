package com.example.backend.Service;

import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Model.Category;
import com.example.backend.Payload.CategoryDTO;
import com.example.backend.Repository.CategoryRepository;
import org.hibernate.Hibernate;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CategoryDTO addCategory(CategoryDTO categoryDTO) {
        //CategoryDTO to Category (Using model mapper instead of manual conversion here)
        Category cat = this.modelMapper.map(categoryDTO, Category.class);
        Category save = this.categoryRepository.save(cat);

        //Category to CategoryDTO
        return this.modelMapper.map(save, CategoryDTO.class);
    }

    @Override
    public CategoryDTO getCategoryById(int category_id) {
        Category category = this.categoryRepository.findById(category_id).orElseThrow(()->new ResourceNotFoundException("This Category Id not found"));
        return this.modelMapper.map(category, CategoryDTO.class);
    }

    @Override
    public List<CategoryDTO> getAllCategories() {
        List<Category> findAll = this.categoryRepository.findAll();
        List<CategoryDTO> allDTO = findAll.stream().map(category->this.modelMapper.map(category,CategoryDTO.class)).collect(Collectors.toList());
        return allDTO;
    }

    @Override
    public CategoryDTO updateCategory(int category_id, CategoryDTO newCategoryDTO) {
        Category oldCat = this.categoryRepository.findById(category_id).orElseThrow(()->new ResourceNotFoundException("This Category Id not found"));
        oldCat.setCategory_name(newCategoryDTO.getCategory_name());
        Category save = this.categoryRepository.save(oldCat);
        return this.modelMapper.map(save, CategoryDTO.class);
    }

    @Override
    public void deleteCategory(int category_id) {
        Category category = this.categoryRepository.findById(category_id).orElseThrow(()->new ResourceNotFoundException("This Category Id not found"));
        this.categoryRepository.delete(category);
    }
}
