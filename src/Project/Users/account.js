import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as client from "./client";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import "./details.css";

function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchAccount = async () => {
    try{
        const user = await client.account();
        setUser(user);
    }
    catch(error){
        navigate("/Project/signin");
    }
  };
  const updateUser = async () => {
    const status = await client.updateUser(user._id, user);
  }
  const signout = async () => {
    await client.signout();
    navigate("/Project/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return(
  <div>
    <h1>Account</h1>
    {user && (
        <div>
            <div className="row mb-4">
                <div className="col-sm-2">
                    <label htmlFor="username" className="text-info font-weight-bold">Username:</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-2">
                    <label htmlFor="password" className="text-info font-weight-bold">Password:</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-2">
                    <label htmlFor="Email" className="text-info font-weight-bold">Email:</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="text"
                    id="Email"
                    className="form-control"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-2">
                    <label htmlFor="firstName" className="text-info font-weight-bold">First Name:</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-2">
                    <label htmlFor="lastName" className="text-info font-weight-bold">Last Name:</label>
                </div>
                <div className="col-sm-4">
                    <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    />
                </div>
            </div>
            <button className="btn btn-primary mb-4" 
              onClick={updateUser}>Update
            </button>
            <button className="btn btn-danger mb-4" 
              onClick={signout}>Signout
            </button>
            {
                user.role === "ADMIN" && (
                    <div>
                        <Link to="/Project/users" className="btn btn-warning">Users</Link>
                    </div>
                )
            }
        </div>
    )}
    
  </div>
  );
}

export default Account;