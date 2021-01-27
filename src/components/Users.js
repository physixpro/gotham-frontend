import React, { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./EditForm";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [showEditForm, setShowEditForm] = useState(false);

  const [currentEditUser, setCurrentEditUser] = useState({});

  const recordName = (e) => {
    setName(e.target.value);
  };

  const recordEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:3001/evaluations");
      setUsers(res.data);
      console.log(res);
    };
    fetchUsers();
  }, []);
  console.log(users);

  const postUser = async () => {
    const userBody = {
      name: name,
      email: email,
    };

    const res = await axios.post("http://localhost:3001/evaluations", userBody);
    console.log(res);
    setName("");
    setEmail("");
  };

  const deleteUser = async (userId) => {
    const res = await axios.delete(
      `http://localhost:3001/evaluation/${userId}`
    );
    const updatedUsers = users.filter((user) => {
      return user._id !== userId;
    });
    setUsers(updatedUsers);
    console.log(res);
  };
  // function that shows the EditForm component on button Click and finds a specific user using the .find array method stored in the updatedEditUser

  const toggleEditForm = (userId) => {
    setShowEditForm(true);
    // Find / Filter
    // Filter says if we return true, we keep that value, else we filter it ou
    // Find says if we return true from this function, we have found that value
    const updatedEditUser = users.find((user) => {
      return user._id === userId;
    });
    setCurrentEditUser(updatedEditUser);
  };

  console.log(currentEditUser);

  return (
    <div>
      <form onSubmit={postUser}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={recordName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={recordEmail}
          value={email}
          required
        />
        <button type="submit">Post User</button>
      </form>
      {showEditForm ? (
        //Attempting to pass the state as a prop here
        <EditForm
          currentEditUser={currentEditUser}
          setShowEditForm={setShowEditForm}
          users={users}
          setUsers={setUsers}
        />
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => toggleEditForm(user._id)}>Edit User</button>
            {/* use empty parenthises and arrow function when passing in parameters */}
            <button onClick={() => deleteUser(user._id)}>Delete User</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;

const add = (a, b) => {
  return a + b;
};

add(5, 6);
