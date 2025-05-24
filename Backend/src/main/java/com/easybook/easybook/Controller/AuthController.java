package com.easybook.easybook.Controller;

import com.easybook.easybook.Dto.UserLoginDto;
import com.easybook.easybook.Service.UserSignupServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserSignupServiceImpl userSignupService;

    @Autowired
    public AuthController(UserSignupServiceImpl userSignupService) {
        this.userSignupService = userSignupService;
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserLoginDto loginDto) {
        boolean isAuthenticated = userSignupService.loginUser(loginDto.getEmail(), loginDto.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
