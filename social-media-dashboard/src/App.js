import React from 'react';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <div className="app">
        {this.state.loggedIn ? (
          <Dashboard />
        ) : (
          <LoginForm onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
