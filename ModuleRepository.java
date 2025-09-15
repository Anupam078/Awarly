package com.awarly.awarly.repository;

import com.awarly.awarly.model.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ModuleRepository extends JpaRepository<Module, Long> {

    // This will automatically create a query to find all modules
    // where the 'targetRole' column matches the provided role.
    List<Module> findByTargetRole(String role);
}
