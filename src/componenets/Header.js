import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import UserContext, { UserProvider, useUser } from "../utils/UserContext";
import { useSelector } from "react-redux";
import Login from "./Login";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();
  // const { loggedInUser } = useContext(UserProvider);
  // console.log(loggedInUser);
  const { userName, setUserName } = useUser();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="shadow-md mb-8">
      <div className="flex justify-between ml-[100px] top-0 left-0 right-0 h-[88px] bg-white z-50 shadow-md transition-transform duration-300 transform translate-z-0">
        <div className="logo-container">
          <Link to="/">
            <img className="logo h-[85px] w-24" src={LOGO_URL} />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Staus:{onlineStatus ? "✅" : "🔻"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">🛒 ({cartItems.length})</Link>
            </li>

            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            {/* <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li> */}
            <li>
              {/* <button
                className="login"
                onClick={() => {
                  btnName == "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button> */}
              <li className="px-4">
                <button>
                  <Link to="/login">{userName != "" ? userName : "Login"}</Link>
                </button>
              </li>
            </li>
            {/* <li>
              <button>
                <Link to="/register">Register</Link>
              </button>
            </li> */}

            {/* <li className="px-4">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
