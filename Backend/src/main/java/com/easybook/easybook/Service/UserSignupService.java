package com.easybook.easybook.Service;

import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Repository.UserSignupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSignupService {

    @Autowired
    private UserSignupRepo userSignupRepo;

    public UserSignup registerUser(UserSignup userSignup)
    {
        return userSignupRepo.save(userSignup);
    }
}
