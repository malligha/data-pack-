package com.app.controller;



import com.app.model.Plan;
import com.app.repo.PlanRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plans")
@CrossOrigin(origins = "http://localhost:3000")
public class PlanController {

    private final PlanRepository repo;

    public PlanController(PlanRepository repo) {
        this.repo = repo;
    }

    // Get all plans
    @GetMapping
    public List<Plan> getAllPlans() {
        return repo.findAll();
    }

    // Add new plan
    @PostMapping
    public Plan addPlan(@RequestBody Plan plan) {
        return repo.save(plan);
    }

    // Delete plan
    @DeleteMapping("/{id}")
    public void deletePlan(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
