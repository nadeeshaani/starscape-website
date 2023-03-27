package com.example.backend.Controller;

import com.example.backend.Payload.ApiResponse;
import com.example.backend.Payload.CategoryDTO;
import com.example.backend.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    //Add category
    @PostMapping("/add")
    public ResponseEntity<CategoryDTO> addCategory(@RequestBody CategoryDTO categoryDTO){
        CategoryDTO save = categoryService.addCategory(categoryDTO);
        return new ResponseEntity<CategoryDTO>(save, HttpStatus.CREATED);
    }

    //View All categories
    @GetMapping("viewAll")
    public ResponseEntity<List<CategoryDTO>> getAllCategories(){
        List<CategoryDTO> all = this.categoryService.getAllCategories();
        return new ResponseEntity<List<CategoryDTO>>(all,HttpStatus.OK);
    }

    //view Category by id
    @GetMapping("/viewById")
    public ResponseEntity<CategoryDTO> getCategoryById(@RequestParam int category_id){
        CategoryDTO getById = this.categoryService.getCategoryById(category_id);
        return new ResponseEntity<CategoryDTO>(getById,HttpStatus.OK);
    }
    //Update Category
    @PutMapping("/update")
    public ResponseEntity<CategoryDTO> updateCategory(@RequestParam int category_id, @RequestBody CategoryDTO categoryDTO){
        CategoryDTO update = this.categoryService.updateCategory(category_id, categoryDTO);
        return new ResponseEntity<CategoryDTO>(update,HttpStatus.OK);
    }

    //Delete Category
    @DeleteMapping("/delete")
    public ResponseEntity<ApiResponse> deleteCategory(@RequestParam int category_id){
        this.categoryService.deleteCategory(category_id);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Category Deleted Successfully!",true),HttpStatus.OK);
    }



}
