import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mt-1">
      <div className="logo-container">
        <Link to="/">
          <img className="logo w-24" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Staus:{onlineStatus ? "✅" : "🔻"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
