package com.pro.login.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pro.login.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByNumberAndPassword(String number, String password);
}
