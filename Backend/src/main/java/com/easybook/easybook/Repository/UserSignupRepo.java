package com.easybook.easybook.Repository;

import com.easybook.easybook.Entity.UserSignup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserSignupRepo extends JpaRepository<UserSignup,Long> {
}

