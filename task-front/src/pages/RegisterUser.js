import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const { firstName, lastName, email, password } = person

    const onInputChange = (e) => {
        const { name, value } = e.target
        setPerson({
            ...person,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault() // Prevent default form submission behavior
        
        try {
            // Send user input data to the server
            await axios.post("http://localhost:8080/registration", person)
            // Redirect user to the desired location
            navigate("/")
        } catch (error) {
            // Handle errors appropriately
            console.error("Error:", error)
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={onSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    name="firstName"
                                    value={firstName} 
                                    onChange={onInputChange} 
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName" 
                                    name="lastName"
                                    value={lastName} 
                                    onChange={onInputChange} 
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email"
                                    value={email} 
                                    onChange={onInputChange} 
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    name="password"
                                    value={password} 
                                    onChange={onInputChange} 
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
