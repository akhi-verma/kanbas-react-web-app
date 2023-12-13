import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css";
import Home from "./home";
import { useEffect, useState } from "react";
import * as client from "./Users/client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./Users/reducer";

function Navigation(){
    const links = 
[
    { name: "Home", icon: <i className={'fas fa-home'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Signin", icon: <i className={'fas fa-circle-user'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Signup", icon: <i className={'fas fa-user-plus'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Signout", icon: <i className={'fas fa-sign-out-alt'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Account", icon: <i className={'fas fa-user'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Search", icon: <i className={'fas fa-search'} style={{fontSize: 2.5 + 'em'}} > </i> },
    { name: "Users", icon: <i className={'fas fa-users'} style={{fontSize: 2.5 + 'em'}} > </i>}
]
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pathname, setPathname] = useState('/');
    const location = useLocation();

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Project/signin");
      };

    useEffect(() => {
        // Set the initial pathname
        setPathname(location.pathname);
    }, [location.pathname]);

    //const { pathname } = useLocation();
    const { currentUser }  = useSelector((state) => state.userReducer);
    return(
        <>
        <div className="col-sm-1 bg-dark wd-navbar d-flex">
            <div className="list-group wd-movieSite-navigation">
            {links.map((link, index) => (
                // Render "Account" only when the user is logged in
                ((link.name === "Account" || link.name === "Signout") && currentUser) ||
                // Render "Signin" and "Signup" only when the user is not logged in
                ((link.name === "Signin" || link.name === "Signup") && !currentUser) ||
                // Render "Users" only when the user is an admin
                (link.name === "Users" && currentUser && currentUser.role === "ADMIN") ||
                // Render other links regardless of the user's login status
                (link.name !== "Account" && link.name !== "Signin" && link.name !== "Signup" && link.name !== "Users" && link.name !== "Signout") ? (
                    <li className={`list-group-item bg-dark ${pathname.includes(link.name.toLowerCase()) && "active"}`} key={index}>
                    {link.name === "Signout" ? (
                        <button className="nav-link wd-signout-btn" onClick={signout}>
                        {link.icon}
                        {link.name}
                        {console.log(link.name)}
                        </button>
                    ) : (
                        <Link to={`/Project/${link.name.toLowerCase()}/`} className="nav-link">
                        {link.icon}
                        <br />
                        {link.name}
                        </Link>
                     )}
                    </li>
                ) : null
            ))}
            </div>
        </div>
        </>
    )
}

export default Navigation;