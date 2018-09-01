import React from 'react';
import Post from './post'

import PostsBuilder from './postsBuilder';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.getPosts = this.getPosts.bind(this);
    this.state = {makeNewPost: false};
  }

	render() {
		return (
      <article className='posts-main'>
      <div className = 'menuBar'>
      <button id='newPostSub' onClick={() => this.createNewPost()}>New Post</button>
      </div>
      {this.newPost()}
        <h1 className='posts-title' id='posts-title'>
          Posts
        </h1>
  			<div className='posts-items'>
  				{this.getPosts()}
  			</div>
      </article>
		)
  }

  newPost() {
    if(this.state.makeNewPost)
    {
      return (
      <div className='postSubDiv'>
        <form id='newPostSub' method='post' action={() => this.submitNewPost()}>
          <textarea id='msgInput' class='msgInClass' onClick={() => document.getElementById('msgInput').value = ''}>
            Whats on your mind?
          </textarea>
          <input type='submit' value='Submit' id='msgSubmit'/>
        </form>
      </div>
      )
    }
  }

 createNewPost() {
   console.log(1233);
    this.setState({makeNewPost: true});
  }

  submitNewPost() {
    var params = document.getElementById('msgInput').textContent;
    this.setState({makeNewPost: false});
  }

  getPosts() {
    return this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post}/>
		);
  }
}

export default Posts;
