package com.pro.plan.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.pro.plan.model.CallPlan;
public interface CallPlanRepository extends JpaRepository<CallPlan, Long> {}
