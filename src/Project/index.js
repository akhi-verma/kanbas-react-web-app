import Home from "./home";
import Details from "./details";
import Login from "./login";
import Profile from "./profile";
import Signup from "./Users/signup";
import Search from "./search";
import UserList from "./Users/list";
import UserDetails from "./Users/details";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import SignIn from "./Users/signin";
import Account from "./Users/account";

function Project() {
  const [key, setKey] = useState('home');
  //process.env;
  return (
    <div className="Container-fluid rounded">
      <h1>Project</h1>
      <div className="row m-0">
        <div className="col-sm-1">
            <div className="list-group">
                <Link to="/Project/home" className="list-group-item">
                    Home
                </Link>
                {/*<Link to="/Project/details" className="list-group-item">
                    Details
                </Link>*/}
                <Link to="/Project/signin" className="list-group-item">
                    Sign in
                </Link>
                <Link to="/Project/account" className="list-group-item">
                    Account
                </Link>
                <Link to="/Project/signup" className="list-group-item">
                    Signup
                </Link>
                <Link to="/Project/search" className="list-group-item">
                    Search
                </Link>
                <Link to="/Project/users" className="list-group-item">
                    Users
                </Link>
            </div>
        </div>
        <div className="col-sm-11 bg-dark text-light">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details/:imdbID" element={<Details />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search/:year" element={<Search />} />
            <Route path="/users" element={<UserList />} />
            <Route path="users/:id" element={<UserDetails />} />
            </Routes>
        </div>
      </div>
    </div>

  );
}

export default Project;