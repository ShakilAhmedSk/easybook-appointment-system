package com.easybook.easybook.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserLoginDto {
    private String  email;
    private String  password;
}
