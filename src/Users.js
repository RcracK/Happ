import React, { useState } from "react";
import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Ama" },
  { id: "u2", name: "Abena" },
  { id: "u3", name: "Kwame" },
  { id: "u4", name: "Michael" },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);
  const [filterUsers, setFilterUsers] = useState("");
  const [newUser, setNewUser] = useState([{ name: "" }]);

  // console.log(addUser);

  let newName = { name: "" };

  const filterHandler = (event) => {
    setFilterUsers(event.target.value);
  };

  const addUser = !newUser ? DUMMY_USERS : setNewUser([...newUser, newName]);

  const search = !filterUsers
    ? DUMMY_USERS
    : DUMMY_USERS.filter((user) =>
        user.name.toLowerCase().includes(filterUsers.toLowerCase())
      );

  const toggleHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const userList = (
    <ul>
      {addUser.search.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      {/* {addUser.map((add) => (
        <ul>
          <li key={add.id}>{add.name}</li>
        </ul>
      ))} */}
    </ul>
  );

  return (
    <div className={classes["User-List"]}>
      <div>
        <input
          name="name"
          type="text"
          value={filterUsers}
          onChange={filterHandler}
        />
      </div>
      <div>
        <button className={classes.btn} onClick={toggleHandler}>
          {showUsers ? "Hide" : "show"} Users
        </button>
      </div>
      <div>
        <button onClick={addUser}>Add Person</button>
      </div>

      {showUsers && userList}
      <div></div>
    </div>
  );
};

export default Users;
