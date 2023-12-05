import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/kanbas/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <div className="form-control">
        <label>Username</label>
        <br />
        <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      </div>
      <div className="form-control">
        <label>Password</label>
        <br />
        <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      </div>
      <button className="btn btn-primary" onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;

