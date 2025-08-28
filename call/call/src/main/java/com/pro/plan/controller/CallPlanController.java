package com.pro.plan.controller;


import org.springframework.web.bind.annotation.*;

import com.pro.plan.model.CallPlan;
import com.pro.plan.repo.CallPlanRepository;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/callplans")

public class CallPlanController {

    @Autowired
    private CallPlanRepository repository;

    // Get all plans
    @GetMapping
    public List<CallPlan> getAllPlans() {
        return repository.findAll();
    }

    // Get plan by ID
    @GetMapping("/{id}")
    public Optional<CallPlan> getPlanById(@PathVariable Long id) {
        return repository.findById(id);
    }

    // Add new plan
    @PostMapping
    public CallPlan addPlan(@RequestBody CallPlan plan) {
        return repository.save(plan);
    }

    // Update plan
    @PutMapping("/{id}")
    public CallPlan updatePlan(@PathVariable Long id, @RequestBody CallPlan newPlan) {
        return repository.findById(id)
                .map(plan -> {
                    plan.setPlanName(newPlan.getPlanName());
                    plan.setDescription(newPlan.getDescription());
                    plan.setValidityDays(newPlan.getValidityDays());
                    plan.setMinutes(newPlan.getMinutes());
                    plan.setSms(newPlan.getSms());
                    plan.setDataLimitGb(newPlan.getDataLimitGb());
                    plan.setPrice(newPlan.getPrice());
                    return repository.save(plan);
                })
                .orElseGet(() -> {
                    newPlan.setId(id);
                    return repository.save(newPlan);
                });
    }

    // Delete plan
    @DeleteMapping("/{id}")
    public void deletePlan(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
