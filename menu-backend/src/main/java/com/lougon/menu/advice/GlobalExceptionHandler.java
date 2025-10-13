package com.lougon.menu.advice;

import com.lougon.menu.domain.exceptions.FoodDeleteException;
import com.lougon.menu.domain.exceptions.FoodException;
import com.lougon.menu.domain.exceptions.FoodNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(FoodNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> handleNotFoundException(FoodNotFoundException ex){
        System.err.println("No food items found: " + ex.getMessage());
        ex.printStackTrace();
        return new ResponseEntity<>("No food items found: " + ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FoodDeleteException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<String> handleDeleteException(FoodDeleteException ex){
        System.err.println("The item cannot be deleted: " + ex.getMessage());
        ex.printStackTrace();
        return new ResponseEntity<>("The item cannot be deleted: " + ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FoodException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST) // Returns HTTP 400 (if it's a client error)
    public ResponseEntity<String> handleFoodException(FoodException ex) {
        System.err.println("A general error ocurred: " + ex.getMessage());
        ex.printStackTrace();
        return new ResponseEntity<>("A general error ocurred: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) {
        System.err.println("An unexpected error occurred: " + ex.getMessage());
        ex.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An internal server error occurred: " + ex.getMessage());
    }
}