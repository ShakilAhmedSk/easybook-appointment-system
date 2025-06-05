package com.easybook.easybook.Service;


import com.easybook.easybook.Dto.UserSignupDto;
import com.easybook.easybook.Entity.UserSignup;

import java.util.Optional;

public interface UserSignupService {
    public void createUser(UserSignupDto userSignupDto);

    public Optional<UserSignup> authenticateUser(String email, String password);
    public Optional<UserSignup> findUserByEmail(String email);
}
