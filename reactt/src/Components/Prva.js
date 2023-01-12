import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Slika from "../Components/slika/xqc.gif";
export class Prva extends Component {
  static contextType = LoginContext;

  state = {
    ime: "",
    prezime: ""
  };

  render() {
    const { loginOpcija, toggleLogin } = this.context;
    return (
      <div>
        <h1>
          Welcome {this.state.ime} {this.state.prezime}
        </h1>
        <table>
          <tr>
            <td>
              <img src={Slika} />
            </td>
            <td>
              <form>
                <input
                  placeholder="ime"
                  value={this.state.ime}
                  onChange={(e) => this.setState({ ime: e.target.value })}
                />
                <br></br>
                <br></br>
                <input
                  placeholder="prezime"
                  value={this.state.prezime}
                  onChange={(e) => this.setState({ prezime: e.target.value })}
                />
                <br></br>
                <br></br>
                <input
                  type="password"
                  placeholder="lozinka"
                  name="Password "
                ></input>
                <br></br>

                <br></br>
                <Link className="link" to="/druga">
                  <button onClick={toggleLogin}>Log In</button>
                </Link>
                <br></br>
                <br></br>
              </form>
              <br></br>
            </td>

            <img src={Slika} />
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Prva;
