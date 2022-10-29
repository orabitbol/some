import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import './home.css';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
const Home = () => {

    const [users, setUsers] = useState([]);
    const [editContactId, setEditContactId] = useState(null);
    const [editFormData, setEditFormData] = useState({});


    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/users');
        setUsers(result.data);
        console.log(result.data);

    }



    const handleEditClick = (event, user) => {
        event.preventDefault();
        setEditContactId(user.id);
        console.log(user.id);
        console.log(user);
        setEditFormData(user)
    }


    return (
        <div className='container'>
            <a className='btn btn-danger mx-2' href='/adduser'>Add User</a>
            <div className="py-4">
                <form >
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>name</th>
                                <th>email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((users, index) => {
                                return (
                                    <Fragment>
                                        {editContactId === users.id ?
                                            <EditableRow key={index} editFormData={editFormData} />
                                            :
                                            <ReadOnlyRow
                                                key={index}
                                                users={users}
                                                handleEditClick={handleEditClick}
                                            />
                                        }
                                    </Fragment>

                                )
                            })}
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Home