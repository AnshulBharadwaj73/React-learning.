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

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1"),
    React.createElement("h2", {}, "h2 "),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
