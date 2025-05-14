package com.easybook.easybook.Controller;

import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Repository.UserSignupRepo;
import com.easybook.easybook.Service.UserSignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserSignupController {

    @Autowired
    private UserSignupService userSignupService;

    @PostMapping("/signup")
    public ResponseEntity<UserSignup> registerUser(@Validated @RequestBody UserSignup userSignup) {
        UserSignup savedUser = userSignupService.registerUser(userSignup);
        return ResponseEntity.ok(savedUser);
    }

}
