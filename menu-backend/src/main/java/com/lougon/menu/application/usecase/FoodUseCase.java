package com.lougon.menu.application.usecase;

import com.lougon.menu.application.dto.FoodRequestDto;
import com.lougon.menu.application.dto.FoodResponseDto;
import java.util.List;

import com.lougon.menu.domain.entities.Food;
import com.lougon.menu.domain.exceptions.FoodException;
import com.lougon.menu.domain.exceptions.FoodNotFoundException;
import com.lougon.menu.domain.usecase.IFoodUseCase;
import com.lougon.menu.infrastructure.repositories.IFoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodUseCase implements IFoodUseCase {

    private final IFoodRepository repository;

    @Autowired
    public FoodUseCase(IFoodRepository repository) {
        this.repository = repository;
    }

    //List all foods in the database
    @Override
    public List<FoodResponseDto> getAllFoods() {
        List<FoodResponseDto> foods = repository.findAll().stream().map(FoodResponseDto::new).toList();

        if(foods.isEmpty()) {
            throw new FoodException("The list is empty!");
        }

        return foods;
    }

    //Save the food in the database
    @Override
    public void saveFood(FoodRequestDto request) {
        if(
           request.title() == null || request.title().trim().isEmpty() ||
           request.price() == null ||
           request.image() == null || request.image().trim().isEmpty()
        ) {
            throw new FoodException("The request cannot contain null fields!");
        }

        Food food = new Food(request.title(), request.image(), request.price());
        repository.save(food);
    }

    @Override
    public void updateFood(Long id, FoodRequestDto request) {
        Food food = this.repository.findById(id).orElseThrow(() -> new FoodNotFoundException("Food not found by id: " + id));

        food.setTitle(request.title());
        food.setPrice(request.price());
        food.setImage(request.image());

        this.repository.save(food);
    }

    @Override
    public void deleteFood(Long id) {
        Food food = this.repository.findById(id).orElseThrow(() -> new FoodNotFoundException("Food not found by id: " + id));

        if (food != null) {
            this.repository.delete(food);
        } else {
            throw new FoodException("Something went wrong: ");
        }
    }
}