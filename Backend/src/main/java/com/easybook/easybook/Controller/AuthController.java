package com.easybook.easybook.Controller;

import com.easybook.easybook.Dto.JwtResponseDto;
import com.easybook.easybook.Dto.UserLoginDto;
import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Service.UserSignupServiceImpl;
import com.easybook.easybook.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserSignupServiceImpl userSignupService;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthController(UserSignupServiceImpl userSignupService, JwtUtil jwtUtil) {
        this.userSignupService = userSignupService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto loginDto) {
        Optional<UserSignup> userOpt = userSignupService.authenticateUser(loginDto.getEmail(), loginDto.getPassword());

        if (userOpt.isPresent()) {
            UserSignup user = userOpt.get();

            // Include role or id in token if needed
            String token = jwtUtil.generateToken(user.getUserEmail(), user.getUserRole(),user.getUserId());

            return ResponseEntity.ok(new JwtResponseDto(token,user.getUserRole(), user.getUserId()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}

