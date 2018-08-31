package com.makersacademy.acebook.model;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class UserTest {
	
	private User user;
	
	@Before public void initialize() {
		user = new User("JackIsCool", "testPassword12", "testEmail@gmail.com");
	}

	@Test
	public void userUsernameMatches() {
		assertEquals(user.username, "JackIsCool");
	}
	
	@Test
	public void userPasswordMatches() {
		assertEquals(user.password, "testPassword12");
	}
	
	@Test
	public void userEmailMatches() {
		assertEquals(user.email, "testEmail@gmail.com");
	}

}