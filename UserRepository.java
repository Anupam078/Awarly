package com.awarly.awarly.repository;

// We need to import the User class we created
import com.awarly.awarly.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    
    // Spring Data JPA will automatically create a query for us from this method name:
    // "Find a User by their email address"
    Optional<User> findByEmail(String email);
}
