import React,{useState} from 'react'

 const EditForm = (props) => {

    const[currentEdit,setCurrentEdit]=useState(props.users)

    const recordCurrentEdit = (e) => {
        e.preventDefault()
        setCurrentEdit(e.target.defaultValue)
        console.log(e.target.value)
    }




    const editedUser = (e) => {
        e.preventDefault()  
        setCurrentEdit(currentEdit)
    }
    
    console.log(currentEdit)
    
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