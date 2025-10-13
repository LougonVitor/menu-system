package com.lougon.menu.domain.usecase;

import com.lougon.menu.application.dto.FoodRequestDto;
import com.lougon.menu.application.dto.FoodResponseDto;

import java.util.List;

public interface IFoodUseCase {
    List<FoodResponseDto> getAllFoods() throws Exception;
    void saveFood(FoodRequestDto request);
    void deleteFood(Long id);
}