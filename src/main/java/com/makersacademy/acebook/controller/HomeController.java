package com.makersacademy.acebook.controller;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;

@Controller
public class HomeController {
	
	@Autowired
	PostRepository postRepository;
	
	@GetMapping("/")
    public String postGet(Model model) {
        model.addAttribute("post", new Post("hello"));
        return "index";
    }

    @PostMapping("/")
    public String greetingSubmit(@ModelAttribute String post) {
    	System.out.println("an args is" + post);
    	//postRepository.save(post);
        return "index";
    }

}
