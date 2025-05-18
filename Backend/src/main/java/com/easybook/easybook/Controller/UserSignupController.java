package com.easybook.easybook.Controller;

import com.easybook.easybook.Dto.UserSignupDto;
import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Service.UserSignupService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserSignupController {


    private final UserSignupService userSignupService;

    @Autowired
    public UserSignupController(UserSignupService userSignupService) {
        this.userSignupService = userSignupService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> createUser(@Valid @RequestBody UserSignupDto userSignupDto){
       userSignupService.createUser(userSignupDto);
        return ResponseEntity.ok("Signup successful");
    }

}
