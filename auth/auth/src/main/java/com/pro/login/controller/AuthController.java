package com.pro.login.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pro.login.model.User;
import com.pro.login.repo.UserRepository;
@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private UserRepository repo;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return repo.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> loginData) {
        String number = loginData.get("number");
        String password = loginData.get("password");
        return repo.findByNumberAndPassword(number, password)
                .map(u -> ResponseEntity.ok("Login Success"))
                .orElse(ResponseEntity.status(401).body("Invalid Credentials"));
    }
}
