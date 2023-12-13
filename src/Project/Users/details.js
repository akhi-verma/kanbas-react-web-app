import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";
import * as likesClient from "../Likes/client";
import * as followClient from '../Follows/client';

function UserDetails(){
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const fetchLikes = async () => {
    const likes = await likesClient.findMoviesLikedByUser(id);
    setLikes(likes);
  }
  const [currentUser, setCurrentUser] = useState(null);

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
  const followUser = async () => {
    const status = await followClient.createUserFollows(id);
    fetchFollowers();
    fetchFollowings();
  }
  const unfollowUser = async () => {
    const status = await followClient.unfollowUser(id);
    fetchFollowers();
    fetchFollowings();
    }

  const fetchFollowers = async () => {
    const followers = await followClient.findFollowersForUser(id);
    setFollowers(followers);
  }
  const fetchFollowings = async () => {
    const followings = await followClient.findFollowersOfUser(id);
    setFollowings(followings);
  }

  const fetchCurrentUser = async () => {
    try{
        const user = await client.account();
        setCurrentUser(user);
        }
    catch(error){
        setCurrentUser(null);
    }
    }

    useEffect(() => {
    fetchUser();
    fetchLikes();
    fetchFollowers();
    fetchFollowings();
    fetchCurrentUser();
  }, [id]);

  return(
    <div>
        <h1 className="heading mt-5 mb-3"> User Details</h1>
          {user && (
            <>
                <div className="row-auto">
                    <div className="col-sm-12 profile-container mx-0">
                       <div className="row">
                          <div className="col-sm-1 fw-bold">
                            <p>Username:</p>
                          </div>
                          <div className="col-sm-4">
                            <p>{user.username}</p>
                          </div>
                          <div className="col-sm-7 fw-bold float-end">
                            {currentUser && currentUser._id !== id && (
                                <>
                                    {followers.some(follower => follower.follower._id === currentUser._id) ? (
                                        <button 
                                        onClick={unfollowUser}
                                        className="btn btn-danger float-end">
                                        Unfollow
                                        </button>
                                    ) : ( 
                                        <button
                                        onClick={followUser}
                                        className="btn btn-warning float-end">
                                        Follow
                                        </button>
                                    )}
                                </>
                            )
                            }
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-1 fw-bold">
                            <p>Email:</p>
                            </div>
                            <div className="col-sm-4">
                            <p>{user.email}</p>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-1 fw-bold">
                            <p>First Name</p>
                            </div>
                            <div className="col-sm-4">
                            <p>{user.firstName}</p>
                            </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-1 fw-bold">
                            <p>Last Name</p>
                            </div>
                            <div className="col-sm-4">
                            <p>{user.lastName}</p>
                            </div>
                        </div>
                        {/*
                        <button className="btn btn-primary" onClick={updateUser}>Update</button>
                        <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button>
                        */}
                    </div>
                </div>
                <div className="row-auto my-4">
                    <h2 className="heading">Movies Liked</h2>
                    <ul className="list-group col-sm-12 user-likes profile-container">
                        {likes.map((like, index) => (
                        <li key={index} className="list-group-item col-sm-3 mx-3 wd-movies-list">
                            <Link to={`/Project/details/${like.movieId}`}>
                                {like.movieTitle}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="row-auto my-4">
                    <h2 className="heading">Followers</h2>
                    <ul className="list-group col-sm-12 user-followers profile-container">
                        {followers.map((follower, index) => (
                        <li key={index} className="list-group-item bg-warning col-sm-3 mx-3">
                            <Link to={`/Project/users/${follower.follower._id}`}>
                                {follower.follower.username}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="row-auto my-4">
                    <h2 className="heading">Following</h2>
                    <ul className="list-group col-sm-12 user-followings profile-container">
                        {followings.map((following, index) => (
                        <li key={index} className="list-group-item bg-warning col-sm-3 mx-3">
                            <Link to={`/Project/users/${following.following._id}`}>
                                {following.following.username}
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