import React from 'react';
import Users from './users'
const client = require('../client');

class UserBuilder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
          <artice className='mainPage'>
          {this.userSignUp()}
          </artice>
      )
  }

  usernameAndPassword() {
      return (
        <div>
            <p>
            <label>Username:</label><input id='username_enter'/>
            </p>
            <p>
            <label>Password:</label><input id='password_set'/>
            </p>
        </div>
      )
  }

  userSignUp() {
      return (
        <div className='signUpDiv'>
            <form id='signUpForm' method='post'>
                {this.usernameAndPassword()}
                <label>Password Confirm:</label><input id='password_confirm'/>
                <p>
                <label>Email:</label><input id='email_enter'/>
                </p>
                <input type='submit' id='back' value='Back'/>
                <input type='submit' id='submit' value='Submit'/>
            </form>
        </div>
      ) 
  }

  userLogIn() {
    return (
        <div className='signUpDiv'>
            <form id='signUpForm' method='post'>
                {this.usernameAndPassword()}
                <input type='submit' id='back' value='Back'/>
                <input type='submit' id='submit' value='Submit'/>
            </form>
        </div>
      ) 
  }
}

export default UserBuilder;
