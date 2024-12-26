import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log(btnName);
  }, [btnName]);

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg p-6 rounded-lg">
      <div className="logo-container">
        <img className="w-56 rounded-lg shadow-lg" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex-grow text-center">
        <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">NCR-FOOD</h1>
      </div>

      <div className="flex items-center space-x-6">
        <img 
          className="h-20 w-20 rounded-full border-4 border-white shadow-lg" 
          src="https://th.bing.com/th/id/OIP.H3sW1xKc7ytIItRbU1BedAHaHG?w=187&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
          alt="Delhi NCR"
        />
        <ul className="flex space-x-6 text-white font-medium">
          <li className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200">
            Online status: {onlineStatus ? "☑️" : "no"}
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:bg-gray-700 px-3 py-2 rounded transition duration-200">
            <button
              className="text-white"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
