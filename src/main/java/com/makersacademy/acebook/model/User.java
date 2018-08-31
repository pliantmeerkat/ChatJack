package com.makersacademy.acebook.model;

public class User {
	
	protected long id;
	protected String username;
	protected String password;
	protected String email;
	
	private User() {
		
	}
	
	public User(String username, String password, String email) {
		this.username = username;
		this.password = password;
		this.email = email;
	}
	
}
