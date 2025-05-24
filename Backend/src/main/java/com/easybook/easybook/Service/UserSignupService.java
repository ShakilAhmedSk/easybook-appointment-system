package com.easybook.easybook.Service;


import com.easybook.easybook.Dto.UserSignupDto;

public interface UserSignupService {
    public void createUser(UserSignupDto userSignupDto);

    boolean loginUser(String email, String password);
}
