import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import "./signin.css";

function SignIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signIn = async () => {
        try{
            const credentials = { username, password };
            const user = await client.signin(credentials);
            dispatch(setCurrentUser(user));
            navigate("/Project/home");
        }
        catch(error){
            setError(error);
        }
    };
    return(
        <div className="container mt-5 my-4 signup-container">
            <h2 className="mb-4">Sign in</h2>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                id="username"
                type="text"
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="form-control my-3 border-warning text-dark wd-placeholder-color"
                />
                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-3 border-warning text-dark wd-placeholder-color"
                />
            </div>
            <button 
              className="btn my-3 btn-signin btn-warning" 
              onClick={signIn}>Sign in
            </button>
        </div>

    )
}

export default SignIn;