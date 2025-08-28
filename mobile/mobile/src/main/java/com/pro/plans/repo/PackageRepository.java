package com.pro.plans.repo;

import com.pro.plans.model.Package;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepository extends JpaRepository<Package, Long> {}
