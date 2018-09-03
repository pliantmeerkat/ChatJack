package com.makersacademy.acebook.model;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

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
    @CreationTimestamp
    private Timestamp created_at;
    
    private Post() {}
    
    public Post(String content) {
    	setContent(content);
    }
    
    public void setContent(String content) {
    	this.content = content;
    }
    
    
    public String getContent() {
    	return this.content;
    }
    
    public Timestamp getCreated_at() {
    	return this.created_at;
    }

}
