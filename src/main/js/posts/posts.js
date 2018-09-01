import React from 'react'
import Post from './post'

import PostsBuilder from './postsBuilder'
import { request } from 'https';

const client = require('../client')

class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.getPosts = this.getPosts.bind(this)
    this.state = {makeNewPost: false}
  }

  render () {
    return (
      <article className='posts-main'>
        <div className='menuBar'>
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
  // {() => this.submitNewPost()}
  newPost () {
    if (this.state.makeNewPost) {
      return (
        <div className='postSubDiv'>
          <form>
            <textarea id='msgInput' class='msgInClass' onClick={() => this.setMessageBoxText('')}>
            Whats on your mind?
            </textarea>
            <button type='button' value='Submit' id='msgSubmit' onClick={() => this.submitNewPost()}>Submit</button>
          </form>
        </div>
      )
    }
  }

  createNewPost () {
    this.setState({makeNewPost: true})
  }

  setMessageBoxText (text) {
    document.getElementById('msgInput').value = text
  }

  getMessagetext () {
    return document.getElementById('msgInput').value
  }

  submitNewPost () {

    var params = `{"message": "Hello;"}`
    
    this.setState({makeNewPost: false})
  }

  getPosts () {
    return this.props.posts.map(post =>
      <Post key={post._links.self.href} post={post} />
    )
  }
}

export default Posts
