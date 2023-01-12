import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Slika from "../Components/slika/twitch.jpg";
import { LoginContext } from "../Context/LoginContext";

function Druga() {
  const { loginOpcija, toggleLogin } = useContext(LoginContext);
  return (
    <div className="druga">
      <br />
      <br />

      <h1>xqcL</h1>
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
            <Link className="link" to="/cetvrta">
              <h1>Most popular emotes</h1>
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

export default Druga;
