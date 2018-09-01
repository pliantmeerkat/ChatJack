package com.makersacademy.acebook.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;

import lombok.Data;

@Data
@Entity
@Table(name = "POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private long userId;
    private Timestamp created_at;
    
    public Post(String content) {
    	setContent(content);
    }
    
    public void setContent(String content) {
    	this.content = content;
    	this.userId = 11;
    	this.created_at = new Timestamp(System.currentTimeMillis());
    }
    
    
    public String getContent() {
    	return this.content;
    }

}
