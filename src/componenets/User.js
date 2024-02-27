import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h2>Name: Anshul</h2>
      <h3>Location India</h3>
    </div>
  );
};

export default User;
