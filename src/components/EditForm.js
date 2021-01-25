import React,{useState} from 'react'
import axios from 'axios'
 const EditForm = (props) => {

    const[currentEdit,setCurrentEdit]=useState()

    const recordCurrentEdit = (e) => {
        setCurrentEdit(e.target.defaultValue)
        console.log(e.target.value)
    }


    

    const editedUser = async (userId) => {

        const editedUserBody = {
            //possible error in this area to be fixed
            name: currentEdit.name
        };
      const res = await axios.put  (`http://localhost:3001/evaluations/${userId}`,editedUserBody)
      console.log(res)
    }
    
    
  
    return (
        <div>
            <form onSubmit={editedUser}>
                {/*attempting to pass the properties here , changed value to default to make input mutable*/}
                <input type="text" name="user" defaultValue={props.currentEditUser.name} onChange={recordCurrentEdit}/>
                <button type="submit">Edit</button>
            </form>
        </div>
    )
}

export default EditForm;