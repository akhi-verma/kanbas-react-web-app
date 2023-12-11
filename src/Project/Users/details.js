import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import { set } from "mongoose";
import * as likesClient from "../Likes/client";

function UserDetails(){
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    const likes = await likesClient.findMoviesLikedByUser(id);
    setLikes(likes);
  }

  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  const updateUser = async () => {
    const status = await client.updateUser(user._id, user);
  }
  const deleteUser = async (id) => {
    const status = await client.deleteUser(id);
    navigate("/Project/users");
  }
  useEffect(() => {
    fetchUser();
    fetchLikes();
  }, []);

  return(
    <div>
        <h1> User Details</h1>
          {user && (
            <>
                <div className="row-auto">
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Firat Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    {/*
                    <button className="btn btn-primary" onClick={updateUser}>Update</button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                    */}
                </div>
                <div className="row-auto my-4">
                    <h2>Movies Liked</h2>
                    <ul className="list-group col-sm-3 user-likes">
                        {likes.map((like, index) => (
                        <li key={index} className="list-group-item bg-warning">
                            <Link to={`/Project/details/${like.movieId}`}>
                                {like.movieTitle}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </>
          )}
    </div>
)
}

export default UserDetails;