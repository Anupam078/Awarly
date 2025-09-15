package com.awarly.awarly.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "modules")
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT") // JPA: Specifies that this column can hold long text.
    private String content; // Could be JSON for quiz questions or phishing email text

    private String moduleType; // e.g., "PHISHING_GAME" or "QUIZ"
    
    private String targetRole; // e.g., "DEVELOPER", "HR", "SALES"
}
