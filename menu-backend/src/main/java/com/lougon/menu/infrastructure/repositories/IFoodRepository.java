package com.lougon.menu.infrastructure.repositories;

import com.lougon.menu.domain.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFoodRepository extends JpaRepository<Food, Long> {
}