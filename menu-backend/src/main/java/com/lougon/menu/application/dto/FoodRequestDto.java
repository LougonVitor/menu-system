package com.lougon.menu.application.dto;

import com.lougon.menu.domain.entities.Food;

public record FoodRequestDto(Long id, String title, String image, Double price) {
    public FoodRequestDto(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}