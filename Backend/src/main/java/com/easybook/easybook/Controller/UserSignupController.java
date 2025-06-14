package com.easybook.easybook.Controller;

import com.easybook.easybook.Dto.UserSignupDto;
import com.easybook.easybook.Dto.UserLoginDto;
import com.easybook.easybook.Service.UserSignupServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class UserSignupController {

    private final UserSignupServiceImpl userSignupService;

    @Autowired
    public UserSignupController(UserSignupServiceImpl userSignupService) {
        this.userSignupService = userSignupService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@Valid @RequestBody UserSignupDto userSignupDto) {
        userSignupService.createUser(userSignupDto);
        return ResponseEntity.ok("Signup successful");
    }


}
