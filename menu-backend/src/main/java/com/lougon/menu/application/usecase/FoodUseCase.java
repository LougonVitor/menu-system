package com.lougon.menu.application.usecase;

import com.lougon.menu.application.dto.FoodRequestDto;
import com.lougon.menu.application.dto.FoodResponseDto;
import java.util.List;

import com.lougon.menu.domain.entities.Food;
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

    @Override
    public List<FoodResponseDto> getAllFoods() {
        List<FoodResponseDto> foods = repository.findAll().stream().map(FoodResponseDto::new).toList();

        if(foods.isEmpty()) {
            throw new RuntimeException("The list is empty!");
        } else {
            return foods;
        }
    }

    @Override
    public void saveFood(FoodRequestDto request) {
        if(request.title() != null && request.price() != null && request.image() != null) {
            Food food = new Food(request.title(), request.image(), request.price());
            repository.save(food);
        } else {
            throw new RuntimeException("The request cannot contain null fields!");
        }
    }
}