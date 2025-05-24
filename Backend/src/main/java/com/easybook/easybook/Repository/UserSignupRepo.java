package com.easybook.easybook.Repository;

import com.easybook.easybook.Entity.UserSignup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserSignupRepo extends JpaRepository<UserSignup,Long> {
    Optional<UserSignup> findByUserEmail(String userEmail);
}

