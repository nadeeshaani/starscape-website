package com.example.backend.Exception;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    //If any Id passed as parameter not found in Service Controller, then orElseThrow method will throw Exception which will be handled here
    @ExceptionHandler(ResourceNotFoundException.class)
    public String HandleResourceNotFoundException(ResourceNotFoundException exception){
        return exception.getMessage();
    }
}
