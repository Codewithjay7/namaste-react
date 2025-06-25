import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count,setCount] = useState(0);
  const [count2] = usestate(1);

  useEffect(() => {

  }, []);


  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count:{count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Ahmedabad</h3>
      <h4>contect us:jay1971chavda@gmail.com</h4>
    </div>
  );
};

export default User;
