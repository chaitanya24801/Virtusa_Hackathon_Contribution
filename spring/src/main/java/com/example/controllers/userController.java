package com.example.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dao.userDao;
import com.example.entities.AuthenticationResponse;

import com.example.entities.user;
import com.example.security.JwtUtil;
import com.example.security.MyUserDetailsService;


@RestController
public class userController {
	
	private static userDao ud;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

	public userController(userDao ud)
	{
		this.ud = ud;
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping("/login")
	public ResponseEntity<AuthenticationResponse> validate(@RequestBody user us)
	{
		System.out.println("login");
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(us.getUsername(), us.getPassword())
			);
		}
		catch (BadCredentialsException e) {
			throw new BadCredentialsException("Incorrect username or password", e);
		}


		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(us.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);
		System.out.println(userDetails.getAuthorities().toArray()[0].toString());
		return ResponseEntity.ok(new AuthenticationResponse(jwt,userDetails.getAuthorities().toArray()[0].toString()));
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@PostMapping("/signup")
	public Map<String,String> addUser(@RequestBody user us)
	{
		System.out.println("signup");
		return ud.postUser(us);
	}


	
}