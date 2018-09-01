import React from 'react'
import Post from './post'

import PostsBuilder from './postsBuilder'

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
//{() => this.submitNewPost()}
  newPost () {
    if (this.state.makeNewPost) {
      return (
        <div className='postSubDiv'>
          <form action='#' th:action='@{/}' th:object='${Post}' method='post'>
            <textarea id='msgInput' class='msgInClass' onClick={() => this.setMessageBoxText('')}>
            Whats on your mind?
            </textarea>
            <input type='submit' value='Submit' id='msgSubmit' />
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
    return document.getElementById('msgInput').textContent
  }

  submitNewPost () {
    this.setState({makeNewPost: false})
  }

  getPosts () {
    return this.props.posts.map(post =>
      <Post key={post._links.self.href} post={post} />
    )
  }
}

export default Posts
