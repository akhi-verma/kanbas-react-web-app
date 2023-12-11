import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as client from './client';
import * as userClient from './Users/client';
import "./details.css";
import { current } from '@reduxjs/toolkit';
import * as likeClient from './Likes/client';

function Details() {
  const [currentUser, setCurrentUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const { imdbID } = useParams();
  const [likes, setLikes] = useState([]);

  const fetchMovie = async () => {
    const movie = await client.findMovieById(imdbID);
    setMovie(movie);
  }

  const fetchUser = async () => {
    try {
        const user = await userClient.account();
        setCurrentUser(user);
    }
    catch(error) {
        setCurrentUser(null);
    }
  }
  const likeMovie = async () => {
    const userLiked = likes.some(like => like.user._id === currentUser._id);
    if (userLiked) {
        return;
    }
    const _likes = await likeClient.createLike(currentUser._id, imdbID, movie.Title);
    setLikes([_likes, ...likes]);
    console.log(userLiked);
    console.log(movie.Title)
}
  const fetchLikes = async () => {
    const likes = await likeClient.findUsersLikeMovies(imdbID);
    setLikes(likes);
  }

  useEffect(() => {
    fetchMovie();
    fetchUser();
    fetchLikes();
  }, []);

  return (
    <div>
        {movie && (
            <div className="container-fluid bg-dark text-light p-4">
                <div className="row">
                    <div className="col-sm-5 p-4">
                        <h1 className="text-primary">{movie.Title}</h1>
                        <b>Directed by: </b>{movie.Director}
                        <p></p>
                        <img src={movie.Poster} alt={movie.Title} className="img-fluid img-poster" />
                    </div>
                    <div className="col-sm-5 p-4">
                        <div className="ratings-section sm-1 bg-secondary p-3 rounded shadow mb-2">
                        <h2 className="section-title text-warning">Details</h2>
                                <dl className="row text-white">
                                    <dt className="col-sm-3">Year:</dt>
                                    <dd className="col-sm-9">{movie.Year}</dd>
                                    <dt className="col-sm-3">Runtime:</dt>
                                    <dd className="col-sm-9">{movie.Runtime}</dd>
                                    <dt className="col-sm-3">Genre:</dt>
                                    <dd className="col-sm-9">{movie.Genre}</dd>
                                    <dt className="col-sm-3">Language:</dt>
                                    <dd className="col-sm-9">{movie.Language}</dd>
                                </dl>
                        </div>
                        <br />
                        <div className="ratings-section sm-1 bg-secondary p-3 rounded shadow mb-2">
                            <h2 className="section-title text-warning">Ratings</h2>
                            <ul className="list-group">
                            {movie.Ratings.map((rating, index) => (
                                <li key={index} className="list-group-item border-0 bg-secondary text-white px-0">
                                <strong>{rating.Source}:</strong> {rating.Value}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <br />
                        <div className="ratings-section sm-1 bg-secondary p-3 rounded shadow mb-2">
                            <h2 className="section-title text-warning">Cast</h2>
                            <ul className="list-group">
                                {movie.Actors.split(',').map((actor, index) => (
                                <li key={index} className="list-group-item border-0 bg-secondary text-white  px-0">
                                    {actor}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2 p-4">
                        <div className='ratings-section sm-1 bg-secondary p-3 rounded shadow mb-5'>
                            <h2 className="section-title text-warning">Awards</h2>
                            <p>{movie.Awards}</p>
                        </div>
                        <div className='ratings-section sm-1 bg-secondary p-3 rounded shadow my-5'>
                            <h2 className="section-title text-warning">Box Office</h2>
                            <p>{movie.BoxOffice}</p>
                        </div>
                        <div>
                            <h2 className="section-title text-warning">Likes</h2>
                            <p>{likes.length} users liked this</p>
                            <ul className="list-group liked-by">
                                {likes.map((like, index) => (
                                <li key={index} className="px-3 list-group-item border-0 bg-secondary text-white px-0">
                                    <Link to={`/Project/users/${like.user._id}`}>
                                    @{like.user.username}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-9 text-light p-4">
                        <h2>Plot</h2>
                        <p>{movie.Plot}</p>
                    </div>
                </div>
                {
                    currentUser && (
                        <button 
                          onClick={likeMovie}
                          className="btn btn-primary mb-4">
                            Like
                        </button>
                    )
                }
                {/*<pre>
                    {JSON.stringify(movie, null, 2)}
                </pre>*/}
            </div>
        )} 
    </div>
    /*<div>
        {movie && (
            <div>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />

                <h2>{movie.Title}</h2>
                <pre>
                    {JSON.stringify(movie, null, 2)}
                </pre>
            </div>
        )}
    </div>*/
  );
}

export default Details;