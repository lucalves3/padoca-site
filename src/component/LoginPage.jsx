import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

class LoginPage extends React.Component {
  render() {
      return(
        <main>
          <Route path="/Login">
            <Login />
          </Route>
        </main>
    )
  }
}

export default LoginPage;
