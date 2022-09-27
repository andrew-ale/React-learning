import { useState } from "react";

import "./App.css";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserhandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: uName + uAge, name: uName, age: uAge }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserhandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
