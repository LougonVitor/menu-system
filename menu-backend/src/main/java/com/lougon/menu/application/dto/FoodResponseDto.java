package com.lougon.menu.application.dto;

import com.lougon.menu.domain.entities.Food;

public record FoodResponseDto(Long id, String title, String image, Double price) {
    public FoodResponseDto (Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}