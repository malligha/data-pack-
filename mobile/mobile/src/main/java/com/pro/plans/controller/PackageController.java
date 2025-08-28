package com.pro.plans.controller;



import java.util.List;
import java.util.Optional;

import com.pro.plans.model.Package;
import com.pro.plans.repo.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/packages")
public class PackageController {

    @Autowired
    private PackageRepository repo;

    // ✅ GET all packages
    @GetMapping
    public List<Package> getAllPackages() {
        return repo.findAll();
    }

    // ✅ POST (Create new package)
    @PostMapping
    public Package createPackage(@RequestBody Package pack) {
        return repo.save(pack);
    }

    // ✅ PUT (Update existing package by ID)
    @PutMapping("/{id}")
    public Package updatePackage(@PathVariable Long id, @RequestBody Package updatedPack) {
        Optional<Package> existingPack = repo.findById(id);

        if (existingPack.isPresent()) {
            Package pack = existingPack.get();
            pack.setPackName(updatedPack.getPackName());
            pack.setPrice(updatedPack.getPrice());
            pack.setDataLimit(updatedPack.getDataLimit());
            pack.setValidity(updatedPack.getValidity());
            pack.setDescription(updatedPack.getDescription());
            pack.setConditionText(updatedPack.getConditionText());
            return repo.save(pack);
        } else {
            throw new RuntimeException("Package not found with id " + id);
        }
    }

    // ✅ DELETE (Delete package by ID)
    @DeleteMapping("/{id}")
    public String deletePackage(@PathVariable Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Package with ID " + id + " deleted successfully.";
        } else {
            throw new RuntimeException("Package not found with id " + id);
        }
    }
}
