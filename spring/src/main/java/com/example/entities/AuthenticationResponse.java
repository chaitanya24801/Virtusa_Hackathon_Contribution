package com.example.entities;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private final String role;

    public AuthenticationResponse(String jwt,String role) {
        this.jwt = jwt;
        this.role=role;
    }

    public String getJwt() {
        return jwt;
    }
}
