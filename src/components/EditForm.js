import React from 'react'

 const EditForm = (props) => {

    
    return (
        <div>
            <form>
                {/*attempting to pass the properties here */}
                <input type="text" name="user" defaultValue={props.currentEditUser}/>
            </form>
        </div>
    )
}

export default EditForm;