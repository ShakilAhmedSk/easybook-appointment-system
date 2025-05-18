    package com.easybook.easybook.Config;

    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.config.annotation.web.builders.HttpSecurity;
    import org.springframework.security.web.SecurityFilterChain;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.security.crypto.password.PasswordEncoder;
    import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

    @Configuration
    public class  SecurityConfig{

        @Bean
        public PasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http
                    .csrf(AbstractHttpConfigurer::disable) // ✅ updated for 6.1+
                    .authorizeHttpRequests(auth -> auth
                            .requestMatchers("/api/user/signup").permitAll()  // Allow signup endpoint
                            .anyRequest().authenticated()                     // Secure others
                    )
                    .formLogin(form -> form
                            .loginPage("http://localhost:5173/login")
                            .permitAll()
                    ); // default login form

            return http.build();
        }
    }
