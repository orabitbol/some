import axios from "axios";
import React, { useState } from "react";
const ReadOnlyRow = (props) => {

    const deleteUser = (users) => {

        axios.delete(`http://localhost:8080/user/${users.id}`, {
        }).then((response) => {
            console.log(response);
        })
        props.history.push('/');
    }

    return (
        <tr >
            <td>{props.users.id}</td>
            <td>{props.users.username}</td>
            <td>{props.users.name}</td>
            <td>{props.users.email}</td>
            <td>
                <button className='btn btn-primary mx-2' onClick={(e) => props.handleEditClick(e, props.users)}>
                    edit
                </button>
                <button onClick={() => deleteUser(props.users)} className='btn btn-danger mx-2'>
                    Delete
                </button>
            </td>
            <td>
                {/* <a className='btn btn-primary mx-2'>View</a>
                <a className='btn btn-outline-primary mx-2' href='/adituser' >
                    Edit

                </a>
                <a className='btn btn-danger mx-2'>Delete</a> */}
            </td>

        </tr>
    )
}

export default ReadOnlyRow