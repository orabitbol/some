import axios from "axios";
import React, { useState } from "react";


const AddUser = (props) => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onInputChange = (e) => {
        axios.post()
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/user', {
            username: username,
            name: name,
            email: email,
        }).then((response) => {
            console.log(response)
        })
        props.history.push('/')
    };




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form >
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                className="form-control"
                                placeholder="Enter your name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">
                                Username
                            </label>
                            <input
                                className="form-control"
                                placeholder="Enter your username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">
                                E-mail
                            </label>
                            <input
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit" onClick={onSubmit} className="btn btn-outline-primary">
                            Submit
                        </button>
                        <a className="btn btn-outline-danger mx-2" href="/">
                            Cancel
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddUser;