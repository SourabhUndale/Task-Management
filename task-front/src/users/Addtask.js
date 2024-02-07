import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Addtask() {

    const navigate = useNavigate()
    {/* Set user Feilds */}
    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: ""
    })

    const { name, username, email } = user

    const onInputChange = (e) => {

        setUsers({ ...user, [e.target.name]: e.target.value })

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:8080/user", user)
        navigate("/")

    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'>Add Task</h2>

                        {/* Add the TaskName */}
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className='mb-3'>
                                <label htmlFor="Name" className="from-label">
                                    TaskName
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)} />

                            {/* Add the Discription */}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="Username" className="from-label">
                                    Discription
                                </label>
                                <textarea
                                    rows="5"
                                    type={"text"}
                                    className="form-control"
                                    placeholder="Enter your Discription"
                                    name="username"
                                    value={username}
                                    onChange={(e) => onInputChange(e)} />
                            </div>

                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link to="/" className="btn btn-outline-danger mx-2">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
