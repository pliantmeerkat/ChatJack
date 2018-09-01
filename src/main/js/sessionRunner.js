import React from 'react';
import UserBuilder from './users/userBuilder'
import PostsBuilder from './posts/postsBuilder'

class SessionRunner extends React.Component {

    constructor(props) {
    super(props)
    this.state = {currentUser: null, action: null};
  }

    // state dependant display

    userLoginDisplay() {
        if(this.state.currentUser === null) {
            return (
            <div className="mainMenu">
            <button id='userSignUp'  onClick={() => this.userSignUp()}>Sign Up</button> 
            </div>
            )
            
        }
        else {
            return (
            <div className="mainMenu">
            <button id='userLogin'  onClick={() => this.userLogin()}>Log In</button>
            <button id='userLogout' onClick={() => this.userLogout()}>Log Out</button>
            </div>
            )
        }
    }

    
    // login actions

    userLogin() {
        this.setState({action: 'Login'})
    }

    userLogout() {
        this.setState({action: 'Logout'})
    }

    userSignUp() {
        this.setState({action: 'SignUp'})
    }

    render() {

        if(this.state.action === 'SignUp') {
            return <UserBuilder/>
        }
        else if(this.state.action === 'Login') {
            return (
            <article className='mainPage'>
            {this.userSignUpDisplay()}
            <PostsBuilder/>
            </article>
            )
        }
        else {
            return (
            <article className='mainPage'>
            {this.userLoginDisplay()}
            <PostsBuilder/>
            </article>
            )
        }
    }

}
export default SessionRunner;