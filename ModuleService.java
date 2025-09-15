package com.awarly.awarly.service;

import com.awarly.awarly.model.Module;
import com.awarly.awarly.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service // Tells Spring this is a Service class.
public class ModuleService {

    // This is Dependency Injection. Spring will automatically provide
    // an instance of our ModuleRepository for us to use.
    @Autowired
    private ModuleRepository moduleRepository;

    /**
     * This is our business method. It fetches all modules for a given role.
     * @param role The role to search for (e.g., "DEVELOPER")
     * @return A list of modules for that role.
     */
    public List<Module> getModulesForRole(String role) {
        // We use the repository we created to find the data from the database.
        return moduleRepository.findByTargetRole(role);
    }
}
