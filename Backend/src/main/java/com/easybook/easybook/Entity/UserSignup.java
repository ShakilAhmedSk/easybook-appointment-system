package com.easybook.easybook.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user_signup")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserSignup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @NotBlank
    private String userName;

    @NotBlank
    @Email
    private String userEmail;

    @NotBlank
    @Size(min = 10, max = 15)
    private String userPhoneNumber;

    @NotBlank
    private String userPassword;

    @NotBlank
    private String userRole;
}
