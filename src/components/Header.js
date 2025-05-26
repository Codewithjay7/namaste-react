import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header render");

  //if no dependency array = it will render all time when the page is loaded
  //if dependency array is empty  = [] it will render only once when the page is loaded
  useEffect(() => {
    console.log("useEffect render");
  });

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "login"?
                 setBtnNameReact("logout")
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
