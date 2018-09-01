package com.makersacademy.acebook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.makersacademy.acebook.model.Post;

@Controller
public class HomeController {
	
	@RequestMapping(value = "/")
	public String index(){
		return "index"; 
	}
}
