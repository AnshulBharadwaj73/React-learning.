import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is a React Project</h2>
        {/* <User /> */}
        <UserClass name={"Anshul class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a React Project</h2>
//       {/* <User /> */}
//       <UserClass name={"Anshul class"} />
//     </div>
//   );
// };

export default About;
