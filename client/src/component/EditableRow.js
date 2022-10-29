import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';

import './editableRow.css'
const EditableRow = (props) => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);


    const updateFormData = (e) => {
        axios.put(`http://localhost:8080/user/${props.editFormData.id}`, {
            username: username,
            name: name,
            email: email,
        }).then((response) => {
            console.log(response);
            setOpen(false);
        })
    }



    useEffect(() => {
        console.log(props.editFormData)
        if (props.editFormData != undefined) {
            setOpen(true);
        }
    }, [props.editFormData])

    if (open) {
        return (


            <tr>

                <td></td>

                <td>
                    <input
                        type="text"
                        className='input-details'
                        required="required"
                        placeholder={props.editFormData.username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                </td>
                <td>
                    <input
                        type="text"
                        className='input-details'
                        required="required"
                        placeholder={props.editFormData.name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </td>
                <td>
                    <input
                        type="email"
                        className='input-details'
                        required="required"
                        placeholder={props.editFormData.email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </td>
                <td>
                    <button className='btn btn-outline-primary mx-2' onClick={(e) => updateFormData(e)} type="submit">
                        Save
                    </button>
                </td>

            </tr>



        )
    }
}

export default EditableRow