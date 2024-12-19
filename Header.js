import { useState,useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const [btnName, setBtnName] = useState("Login"); // State to track button text
//if no dependency array useefffect is called on every render
 //if dependency array is empty =[]=>useeffect is called on initial render 
//if dependency array is [btnnamereact]=> called everytime btnnamereact is updated 
 useEffect(()=>{
  console.log("useEffect called")
},[btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login"); // Toggle button text
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
