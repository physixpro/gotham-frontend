import React, { useState, useEffect } from "react";
import axios from "axios";
import EditForm from "./EditForm"
import PostForm from "./PostForm"

const Users = () => {

  const [users, setUsers] = useState([]);

  const[name,setName] = useState("")

  const[email,setEmail] = useState("")

  const[showEditForm,setShowEditForm] = useState(false)

  const[currentEditUser,setCurrentEditUser] = useState({})

 
const recordName = (e) => {
  setName(e.target.value)
}

const recordEmail = (e) => {
  setEmail(e.target.value)
}


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
      email: name
    }
    const res = await axios.post("http://localhost:3001/evaluations", userBody)
    console.log(res)
  setName("")
  setEmail("")

  }

  const deleteUser = async (userId) => {
    const res = await axios.delete(
      `http://localhost:3001/evaluation/${userId}`
    );
    const updatedUsers = users.filter((user) => {
      return user._id !== userId;
    });
    setUsers(updatedUsers)
    console.log(res);
  };

  const toggleEditForm = (userId) => {
setShowEditForm(true)

  }
  return (
    <div>
    <form onSubmit={postUser}>
    <input type="text" name = "name" placeholder="name" onChange={recordName} value={name} required />
     <input type="email" name = "email" placeholder="email" onChange={recordEmail} value={email} required/>
     <button tyep="submit">Post User</button>
    </form>
        {showEditForm ? <EditForm /> :
      users.map((user) => (
        <div key={user._id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={() => toggleEditForm(user._id)}>Edit User</button>
          {/* use empty parenthises and arrow function when passing in parameters */}
          <button onClick={() => deleteUser(user._id)}>Delete User</button>
        </div>
      ))}
    </div>
  );
};

export default Users;

const add = (a, b) => {
  return a + b;
};

add(5, 6);
