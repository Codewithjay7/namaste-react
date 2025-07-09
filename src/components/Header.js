import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import setOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import grocery from "../components/Grocery";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //console.log("header render");

  //if no dependency array = it will render all time when the page is loaded
  //if dependency array is empty  = [] it will render only once when the page is loaded
  useEffect(() => {
    console.log("useEffect render");
  });

  return (
    <div className="flex">
      <div className="logo-container">
        <img className="w-8" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus? "✅": "🔴"}
          </li>
          <li>
          <Link to="/">Home
          </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
