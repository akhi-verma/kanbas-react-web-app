import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const signIn = async () => {
        try{
            const credentials = { username, password };
            const user = await client.signin(credentials);
            navigate("/Project/account");
        }
        catch(error){
            setError(error);
        }
    };
    return(
        <div>
            <h2>Sign in</h2>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <div className="form-group">
                <label>Username</label>
                <input
                type="text"
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="form-control"
                />
                <label>Password</label>
                <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                />
            </div>
            <button 
              className="btn btn-primary" 
              onClick={signIn}>Sign in
            </button>
        </div>

    )
}

export default SignIn;