package com.lougon.menu.controller;

import com.lougon.menu.application.dto.FoodRequestDto;
import com.lougon.menu.application.dto.FoodResponseDto;
import com.lougon.menu.domain.usecase.IFoodUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("food")
public class FoodController {
    private final IFoodUseCase useCase;
    @Autowired
    public FoodController(IFoodUseCase useCase) {
        this.useCase = useCase;
    }

    //List all foods in the database
    @GetMapping
    public List<FoodResponseDto> getAll() throws Exception {
        try {
            return useCase.getAllFoods();
        } catch (Exception ex) {
            throw  new Exception("Error in the getAll method when searching for the list of foods: " + ex.getMessage());
        }
    }

    //Save the food in the database
    @PostMapping
    public ResponseEntity<String> saveFood(@RequestBody FoodRequestDto request) throws Exception {
        try {
            useCase.saveFood(request);
            return ResponseEntity.ok("Food saved with successfully!");
        } catch (Exception ex) {
            throw new Exception("Error when saving food: " + ex.getMessage());
        }
    }
}