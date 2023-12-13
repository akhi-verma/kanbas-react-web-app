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
import store from "./store";
import { Provider } from "react-redux";
import Navigation from "./nav";
import CurrentUser from "./Users/currentUser";

function Project() {
  const [key, setKey] = useState('home');
  //process.env;
  return (
    <Provider store={store}>
        <CurrentUser>
            <div className="container-fluid bg-dark p-0">
            <div className="row m-0 top-row">
                <Navigation />
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
        </CurrentUser>
    </Provider>
  );
}

export default Project;