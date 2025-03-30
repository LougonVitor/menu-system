package com.lougon.menu.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;

@Table(name= "foods")
@Entity(name = "foods")
@AllArgsConstructor
public class Food {
    public Food() {}

    public Food (String title, String image, Double price) {
        setTitle(title);
        setImage(image);
        setPrice(price);
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String image;

    private Double price;

    public Long getId() {
        return this.id;
    }

    public String getTitle() {
        return this.title;
    }

    public String getImage() {
        return this.image;
    }

    public Double getPrice() {
        return this.price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}