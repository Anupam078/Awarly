package com.awarly.awarly.controller;

import com.awarly.awarly.model.Module;
import com.awarly.awarly.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController // Marks this as a REST API controller, automatically converting responses to JSON.
@RequestMapping("/api/v1/modules") // Sets the base URL for all methods in this class.
@CrossOrigin(origins = "http://localhost:5173") // IMPORTANT: Allows our React frontend to call this API.
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    // This method handles HTTP GET requests to /api/v1/modules
    // It expects a URL parameter like: ?role=DEVELOPER
    @GetMapping
    public ResponseEntity<List<Module>> getModulesByRole(@RequestParam String role) {
        List<Module> modules = moduleService.getModulesForRole(role);
        return ResponseEntity.ok(modules); // Returns the list of modules with a 200 OK status.
    }
}
