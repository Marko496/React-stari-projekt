import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import Slika2 from "../Components/slika/slika2.webp";
import Slika3 from "../Components/slika/original.gif";
import Slika4 from "../Components/slika/felix.jpg";
import Slika5 from "../Components/slika/xqc2.gif";
import Slika1 from "../Components/slika/train.png";
import Slika7 from "../Components/slika/fup.gif";
function Treca() {
  const { loginOpcija, toggleLogin } = useContext(LoginContext);
  return (
    <div>
      <br />
      <br />

      <h1>Most Famous Streamers</h1>
      <p></p>
      <br></br>
      <table>
        <tr>
          <td>
            {" "}
            <img src={Slika2} width="300" />
          </td>
          <td>
            <h3>
              Tyler Steinkamp (born March 7, 1995), better known by his online
              alias tyler1, T1 or TT for short, is an American internet
              personality and streamer on Twitch. He is one of the most popular
              League of Legends online personalities with more than 4.2 million
              followers on Twitch.
            </h3>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Slika3} width="300" />
          </td>
          <td>
            <h3>Currently has 20,000 active subscribers</h3>
          </td>
        </tr>
      </table>

      <br />
      <br />
      <br />
      <br />

      <table>
        <tr>
          <td>
            {" "}
            <img src={Slika4} width="300" />
          </td>
          <td>
            <h3>
              Félix Lengyel (French pronunciation: ​[feliks lɑ̃ʒɛl], born
              November 12, 1995), better known by his online alias xQc or xQcOW,
              is a Canadian Twitch streamer, internet personality, and former
              professional Overwatch player.
            </h3>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Slika5} width="300" />
          </td>
          <td>
            <h3>Currently has 50,000 active subscribers</h3>
          </td>
        </tr>
      </table>

      <br />
      <br />
      <br />
      <br />

      <table>
        <tr>
          <td>
            {" "}
            <img src={Slika1} width="300" />
          </td>
          <td>
            <h3>
              Tyler Faraz Niknam[1] (born December 20, 1990), better known by
              his online alias Trainwreckstv, is an American Twitch streamer and
              podcast host. He has hosted the Scuffed Podcast on his Twitch
              channel since 2019.
            </h3>
          </td>
        </tr>
        <tr>
          <td>
            <img src={Slika7} width="300" />
          </td>
          <td>
            <h3>Currently has 10,000 active subscribers</h3>
          </td>
        </tr>
      </table>
      <br></br>
      <table>
        <tr>
          <td>
            <Link className="link" to="/Druga">
              <h1>Go Back</h1>
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

export default Treca;
