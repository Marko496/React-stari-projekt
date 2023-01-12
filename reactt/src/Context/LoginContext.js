import React, { Component, createContext } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
  state = {
    loginOpcija: false
  };
  toggleLogin = () => {
    this.setState({ loginOpcija: !this.state.loginOpcija });
  };
  render() {
    return (
      <LoginContext.Provider
        value={{ ...this.state, toggleLogin: this.toggleLogin }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContextProvider;
