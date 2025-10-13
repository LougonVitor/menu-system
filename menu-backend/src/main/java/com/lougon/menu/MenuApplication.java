package com.lougon.menu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication//(exclude = {DataSourceAutoConfiguration.class })
public class MenuApplication {
	public static void main(String[] args) { SpringApplication.run(MenuApplication.class, args); }
}