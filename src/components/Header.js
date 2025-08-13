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
    <div className="flex justify-between lg:bg-black mb-4 text-white sm:bg-gray-800 shadow-lg "> 
    {/* //for dark mode // dark: */}
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus? "✅": "🔴"}
          </li>
          <li className="px-4">
          <Link to="/">Home
          </Link>
          </li >
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li  className="px-4">Cart</li>
          <button
            className="px-4"
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
