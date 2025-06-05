package com.easybook.easybook.security;

import com.easybook.easybook.Entity.UserSignup;
import com.easybook.easybook.Service.UserSignupService;
import com.easybook.easybook.Service.UserSignupServiceImpl;
import com.easybook.easybook.Util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

// JwtAuthenticationFilter.java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;
    private final UserSignupService userSignupService;

    @Autowired
    public JwtAuthenticationFilter(JwtUtil jwtUtil, UserSignupServiceImpl userSignupService) {
        this.jwtUtil = jwtUtil;
        this.userSignupService = userSignupService;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path.startsWith("/api/auth/");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String path = request.getServletPath();

        final String authHeader = request.getHeader("Authorization");
        String token = null;
        String emailFromToken = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            emailFromToken = jwtUtil.extractUsername(token);
        }

        if (emailFromToken != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            Optional<UserSignup> userOpt = userSignupService.findUserByEmail(emailFromToken);

            if (userOpt.isPresent() && jwtUtil.validateToken(token, userOpt.get().getUserEmail())) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userOpt.get(), null, new ArrayList<>()
                        );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
