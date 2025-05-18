package com.easybook.easybook.Dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserSignupDto {

    @NotBlank
    private String userName;

    @NotBlank
    @Email
    private String userEmail;

    @NotBlank

    private String userPhoneNumber;

    @NotBlank
    private String userPassword;

    @NotBlank
    private String userRole;
}
