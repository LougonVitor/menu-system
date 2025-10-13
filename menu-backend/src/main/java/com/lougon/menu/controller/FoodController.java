package com.lougon.menu.controller;

import com.lougon.menu.application.dto.FoodRequestDto;
import com.lougon.menu.application.dto.FoodResponseDto;
import com.lougon.menu.domain.exceptions.FoodException;
import com.lougon.menu.domain.usecase.IFoodUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController {
    private final IFoodUseCase useCase;
    @Autowired
    public FoodController(IFoodUseCase useCase) {
        this.useCase = useCase;
    }

    //List all foods in the database
    @GetMapping
    public ResponseEntity<?> getAll() throws Exception {
        try {
            List<FoodResponseDto> foods = useCase.getAllFoods();
            return ResponseEntity.ok(foods);
        } catch (FoodException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No food items found: " + exception.getMessage());
        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error: " + exception.getMessage());
        }
    }

    //Save the food in the database
    @PostMapping
    public ResponseEntity<String> saveFood(@RequestBody FoodRequestDto request) throws Exception {
        try {
            useCase.saveFood(request);
            return ResponseEntity.ok("Food saved with successfully!");
        } catch (FoodException exception) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error when saving food: " + exception.getMessage());
        }
    }

    //Delete the food in the database
    @DeleteMapping("/{id}")
    public void deleteFood(@PathVariable ("id") Long id) { this.useCase.deleteFood(id); }
}