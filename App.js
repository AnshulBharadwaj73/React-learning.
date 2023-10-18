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
import React from "react";
import ReactDOM from "react-dom/client";

//Day 1
// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1"),
//     React.createElement("h2", {}, "h2 "),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Day 3
// React Componenets
//  two types of component
//        Class based component and functional component
// class based componenets are not used in todays world
// we use Functional compnent

// React elememt
const heading = <h1 class="heading"> This is a React elemnt</h1>;

const Comp = () => <h2>componenet</h2>;

// JSX is making the code readable not react
// React Functional Component
const Heading = () => (
  <div>
    {heading}
    {Comp()}
    {/* we can also call this functional component as a function call beacuse at last it is a JS code */}
    <Comp />{" "}
    {/* so component should start with capital letter otherwise the browser wont recognise as a compnent*/}
    <h1 className="heading"> This is a React Functional compnenet</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
