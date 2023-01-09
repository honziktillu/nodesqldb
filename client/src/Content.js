import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to='create'>
        <button className='button crud is-success'>
          Vytvořit uživatele
        </button>
      </Link>
      {users.result.map((user) => (
        <Box id={user.id} name={user.name} age={user.age} image={user.image} />
      ))}
    </>
  );
};

export default Content;
