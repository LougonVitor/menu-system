# menu-system
 A full-stack project where we can manage menus using clean architecture, java with spring boot and react. In this project, I used Java on the back end and React with TypeScript on the front, to build a responsive and beautiful page for our Mind.

___It is worth mentioning that I decided to put the front-end and the back-end in the same repository because this is a small project.___

## Technologies Used

- **Java**
- **Spring Boot**
- **PostgreSQL**
- **React**
- **TypeScript**
- **Clean Architecture**

## How It Works

1. The Java API receives a request from the front-end through a hook, which stores the data in a postgresql database.
2. The API automatically captures all the data saved in the database and sends it to the front-end to assemble the menu.
 
## Configuration

Configure the .properties file to connect to your database.:
```properties
spring.datasource.url=${POSTGRE_MENU_DATABASE_URL}
spring.datasource.username=${POSTGRE_USERNAME_ADMIN}
spring.datasource.password=${POSTGRE_PASSWORD_ADMIN}
```

## Contribution

Contributions are welcome! Feel free to open an **issue** or submit a **pull request**.

---

Made with ❤️ and **Java** and **React**! 🚀
