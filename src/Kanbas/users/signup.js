import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="form-control">
        <label>Username</label>
        <br />
        <input
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />      
      </div>
      <div className="form-control">
        <label>Password</label>
        <br />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      </div>
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;

