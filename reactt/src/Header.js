import React, { useContext } from "react";
import "./App.css";
import { LoginContext } from "./Context/LoginContext";

function Header() {
  const { loginOpcija, toggleLogin } = useContext(LoginContext);
  return (
    <div className="header">
      <h1>Welcome to Twitch.tv</h1>
      <p style={{ float: "left" }}>
        <div class="aaa">{loginOpcija ? "Logged in" : "Logged out"}</div>
      </p>
    </div>
  );
}

export default Header;
