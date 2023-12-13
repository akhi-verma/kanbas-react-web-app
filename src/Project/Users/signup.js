import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./signup.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

  
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="container mt-5 my-4 signup-container">
      <h2 className="mb-4">Sign up</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
      <label htmlFor="signup-username">Username</label>
        <input
          id="signup-username"
          className="form-control my-3 border-warning text-dark wd-placeholder-color"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value })}
        />
      </div>
      <div className="form-group">
      <label htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          className="form-control my-3 border-warning text-dark wd-placeholder-color"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value })}
        />
      </div>
      <button className="btn my-3 wd-signup-btn btn-warning" onClick={signup}>
        Sign up
      </button>
    </div>
  );
}
export default Signup;