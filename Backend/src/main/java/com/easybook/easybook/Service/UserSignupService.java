package com.easybook.easybook.Service;

import com.easybook.easybook.Dto.UserSignupDto;
import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Repository.UserSignupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Service
public class UserSignupService {

    private final UserSignupRepo userSignupRepo;
    private final PasswordEncoder passwordEncoder;




    @Autowired
    public UserSignupService(UserSignupRepo userSignupRepo, PasswordEncoder passwordEncoder) {
        this.userSignupRepo = userSignupRepo;
        this.passwordEncoder = passwordEncoder;
    }



    public void createUser(UserSignupDto userSignupDto){
        UserSignup user = new UserSignup();
        user.setUserName(userSignupDto.getUserName());
        user.setUserEmail(userSignupDto.getUserEmail());
        user.setUserPhoneNumber(userSignupDto.getUserPhoneNumber());
        user.setUserPassword(passwordEncoder.encode(userSignupDto.getUserPassword()));
        user.setUserRole(userSignupDto.getUserRole());
        userSignupRepo.save(user);
    }

}
