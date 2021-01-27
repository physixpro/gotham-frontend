import React, { useState } from "react";
import axios from "axios";
const EditForm = (props) => {
  const [currentEdit, setCurrentEdit] = useState({});

  const [currentEmail, setCurrentEmail] = useState({});

  const recordCurrentEmail = (e) => {
    setCurrentEmail({ email: e.target.value });
  };

  const recordCurrentEdit = (e) => {
    setCurrentEdit({ name: e.target.value });
    console.log(e.target.value);
  };

  const submitEditedUser = async (e) => {
    e.preventDefault();
    const editedUserBody = {
      //possible error in this area to be fixed
      _id: props.currentEditUser._id,
      name: currentEdit.name,
      email: currentEmail.email,
    };
    const res = await axios.put(
      `http://localhost:3001/evaluation/${props.currentEditUser._id}`,
      editedUserBody
    );
    // users = [{user1}, {user2}, {user3}]
    // users = [{user1}, {editedUser2}, {user3}]
    const startIndex = props.users.findIndex((user) => {
      return user._id === props.currentEditUser._id;
    });
    // Splice - start, how many to remove (1), the item we want to replace it with
    const usersArr = props.users;
    usersArr.splice(startIndex, 1, editedUserBody);
    props.setUsers(usersArr);
    props.setShowEditForm(false);
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={submitEditedUser}>
        {/*attempting to pass the properties here , changed value to default to make input mutable*/}
        <input
          type="text"
          name="user"
          defaultValue={props.currentEditUser.name}
          onChange={recordCurrentEdit}
        />
        <input
          type="email"
          name="email"
          defaultValue={props.currentEditUser.email}
          onChange={recordCurrentEmail}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditForm;
