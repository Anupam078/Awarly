package com.awarly.awarly.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data // Lombok: automatically creates getters, setters, toString(), etc.
@Entity // JPA: Marks this class as a database entity.
@Table(name = "users") // JPA: Specifies the table name in the database.
public class User {

    @Id // JPA: Marks this field as the primary key.
    @GeneratedValue(strategy = GenerationType.IDENTITY) // JPA: Configures the ID to be auto-incrementing.
    private Long id;

    private String email;
    private String password;
    private String role; // e.g., "DEVELOPER", "HR", "SALES"
}
