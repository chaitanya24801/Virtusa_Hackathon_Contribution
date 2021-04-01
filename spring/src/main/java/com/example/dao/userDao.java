package com.example.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.example.entities.user;

@Component
public class userDao {
    @Autowired
	private static JdbcTemplate jt;
	
	public userDao(JdbcTemplate jt)
	{
		this.jt=jt;
	}
	
	RowMapper<user> ru = (rs,rowNum)->{
		user u = new user(rs.getInt("user_id"),rs.getString("username"),rs.getString("mobilenumber"),rs.getString("password"),rs.getString("role"));
		return u;
	};

    public user getUser(String u)
	{
		String sql = "select * from users where username = '"+u+"'";
		List<user> l = jt.query(sql,ru);
		if(l.get(0).getUsername()==null)
			return null;
		else
			return l.get(0);
	}
	
	public Map<String,String> postUser(user u)
	{
		Map<String,String> mp = new HashMap<>();
		u.setRole("user");
		String sql = "insert into users(username,mobilenumber,password,email,role) values('"+u.getUsername()+"','"+u.getMobilenumber()+"','"+u.getPassword()+"','"+u.getEmail()+"','"+u.getRole()+"')";
		try {
			jt.update(sql);
			mp.put("status","success");
		}catch(Exception e) {
			System.out.println(e);
			mp.put("status","failed");
		}
		return mp;
	}

}
