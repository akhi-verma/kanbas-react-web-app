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
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container mt-5 my-4 signup-container">
      <h1 className="text-center mb-4 text-warning">Signup</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;