// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "h1")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//if we want to insert multiple heading then we pass it as an array

/**
 * Header
 *   Logo
 *   Nav Item
 * Body
 *  -Search
 *  - RestaurantContainer
 *    - Restaurant Car
 *      - img
 *      - Name of dish, rating etc.
 * Footer
 *  copyright
 *  Links etc
 */

import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";
// import UserContext from "./utils/UserContext";
import { UserProvider } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./componenets/Cart";
import Footer from "./componenets/Footer";
import Carsouel from "./componenets/Carsouel";
import Login from "./componenets/Login";
import Register from "./componenets/Register";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // useEffect(() => {
  //   const data = {
  //     name: "Anshul",
  //   };
  //   setUserName(data.name);
  // }, []);

  return (
    <Provider store={appStore}>
      <UserProvider>
        <div className="app">
          <Header />
          {/* <Login /> */}
          <Outlet />
        </div>
      </UserProvider>
    </Provider>
  );
};

const About = lazy(() => import("./componenets/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: [<Carsouel />, <Body />, <Footer />],
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Login>
            {" "}
            <Cart />
          </Login>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
