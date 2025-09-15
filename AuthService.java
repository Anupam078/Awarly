package com.awarly.awarly.service;

import com.awarly.awarly.model.User;
import com.awarly.awarly.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder; // We'll configure this soon
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    // We will inject Spring Security's password encoder here later.
    // @Autowired
    // private PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        // TODO for later: Add a check to see if the user's email already exists.

        // SECURITY NOTE: We must NEVER store passwords in plain text.
        // For the next step, we will configure Spring Security to hash the password.
        // For now, the logic will be:
        // user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        // For now, we save the user as is.
        return userRepository.save(user);
    }
}
