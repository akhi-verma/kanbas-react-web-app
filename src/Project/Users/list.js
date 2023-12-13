import { Link, Navigate, useNavigate } from 'react-router-dom';
import * as client from './client';
import { useEffect, useState } from 'react';
import "./list.css";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill }
  from "react-icons/bs";
import "./list.css"

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      //navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setCredentials(u);
    } catch (err) {
      console.log(err);
    }
  };
  
  const updateUser = async () => {
    try {
      const status = await client.updateUserByAdmin(credentials._id, credentials);
      setUsers(users.map((u) => (u._id === credentials._id ? credentials : u)));
    } catch (err) {
      console.log(err);
    }
  }

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user._id);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUser = async () => {
    try{
      const user = await client.account();
      setCurrentUser(user);
    }
    catch(error){
      navigate("/Project/account");
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
    fetchUser();
  }, []);
  return(
    <div>
      {
        currentUser && currentUser.role === "ADMIN" && (
        <>
          <h2 className='heading mt-5'>User Management</h2>
          <table className="table table-striped table-hover table-dark my-5">
            <thead className="thead heading-text">
              <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className={user.role === 'ADMIN' ? 'table-primary' : ''}>
                  <td>
                  <Link key={user._id} 
                      to={`/Project/users/${user._id}`} 
                      className="list-group-item">
                      {user.username}
                  </Link>
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-warning me-2 fas fa-user-pen"
                        onClick={() => selectUser(user)}>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-warning me-2 fas fa-trash"
                        onClick={() => deleteUser(user)}>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className='heading'>Update User Information</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <div lassName="container list-container mx-0">
            <div className="form-group col-sm-3 py-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={credentials.password}
                placeholder='Password'
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
            </div>

            <div className="form-group col-sm-3 py-1">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={credentials.username}
                placeholder='Username'
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>

            <div className="form-group col-sm-3 py-1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={credentials.firstName}
                placeholder='First Name'
                onChange={(e) => setCredentials({ ...credentials, firstName: e.target.value })}
              />
            </div>

            <div className="form-group col-sm-3 py-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={credentials.lastName}
                placeholder='Last Name'
                onChange={(e) => setCredentials({ ...credentials, lastName: e.target.value })}
              />
            </div>

            <div className="form-group col-sm-3 py-1">
              <label htmlFor="role">Role</label>
              <select
                className="form-control"
                id="role"
                onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="CRITIC">Critic</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary mb-4 mt-4 bg-success" 
            onClick={signup}><i className="fa-solid fa-user-plus"></i>  Create
          </button>
          <button className="btn btn-primary mb-4 mt-4 mx-3" 
            onClick={updateUser}>Update
          </button>
        </>
        )
      }
      {
        currentUser && currentUser.role !== "ADMIN" && (
          <Navigate to={`/Project/account/`}/>
        )
      }
    </div>
  );
}

export default UserList;