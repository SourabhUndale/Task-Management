import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login data to the backend
            const response = await axios.post("http://localhost:8080/login", {
                email: email,
                password: password
            });

            // Check if response is defined and has data property
            if (response && response.data) {
                // Assuming response contains user data after successful login
                const userData = response.data;

                // Redirect user to dashboard or perform other actions
                console.log("Login successful!");
            } else {
                console.error("No data returned from server");
                setError("An error occurred during login");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            setError("An error occurred during login");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                value={password} 
                                onChange={handlePasswordChange} 
                                required 
                            />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
