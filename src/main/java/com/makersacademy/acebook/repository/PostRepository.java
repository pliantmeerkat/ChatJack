package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;


public interface PostRepository extends CrudRepository<Post, Long> {
	
}
