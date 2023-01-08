import { useState, useEffect } from "react";
import Box from "./Box";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Users are loading...</p>
      </>
    );
  }
  return (
    <>
      {users.result.map((user) => (
        
        <Box name={user.name} age={user.age} image={user.image} />
      ))}
    </>
  );
};

export default Content;
