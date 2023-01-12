import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../Components/slika/ayy.png";
import { LoginContext } from "../Context/LoginContext";

function Cetvrta() {
  const { loginOpcija, toggleLogin } = useContext(LoginContext);
  return (
    <div className="Cetvrta">
      <br />
      <br />

      <h1>Most popular emotes</h1>
      <p></p>
      <br></br>
      <img src={Slika} width="100%" />
      <br></br>
      <table>
        <tr>
          <td>
            <Link className="link" to="/treca">
              <h1>Most subbed twitch streamers</h1>
            </Link>
          </td>
          <td>
            <Link className="link" to="/druga">
              <h1>Go Back</h1>
            </Link>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <div class="aa">
        <Link className="link" to="/">
          <h5 onClick={() => toggleLogin()}>Log Out</h5>
        </Link>
      </div>
    </div>
  );
}

export default Cetvrta;
