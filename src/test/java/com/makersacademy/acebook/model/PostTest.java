package com.makersacademy.acebook.model;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class PostTest {

	private Post post;
	
	@Before public void initialize() {
		post = new Post("hello");
	}

	@Test
	public void postHasContent() {
		assertEquals(post.getContent(), "hello");
	}

}
