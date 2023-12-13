import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as client from './client';
import * as userClient from './Users/client';
import "./details.css";
import { current } from '@reduxjs/toolkit';
import * as likeClient from './Likes/client';
import * as commentClient from './Comments/client';
import StarRating from './StarRating'; 

function Details() {
  const [currentUser, setCurrentUser] = useState(null);
  const [movie, setMovie] = useState(null);
  const { imdbID } = useParams();
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const commentMovie = async () => {
    
    const _comment = await commentClient.createUserComment(currentUser._id, imdbID, movie.Title, comment, rating);
    setComment([_comment, ...comment]);
    console.log(movie.Title)
  }

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

  const unlikeMovie = async () => {
    const _likes = await likeClient.deleteLike(currentUser._id, imdbID);
    setLikes(likes.filter(like => like.user._id !== currentUser._id));
}   
 
    const fetchComments = async () => {
        const comments = await commentClient.findCommentsForMovie(imdbID);
        setComments(comments);
    }

    const deleteComment = async (comment) => {
        const _comments = await commentClient.deleteComment(currentUser._id, comment._id);
        setComments(comments.filter((_comment) => _comment.user._id !== currentUser._id));
        console.log(movie.Title)
    }

    const handleRatingChange = (selectedRating) => {
        setRating(selectedRating);
        };
    
    const calculateAverageRating = () => {
        if (comments.length === 0) {
            return 0; // Return 0 if there are no reviews
        }

        const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
        const averageRating = totalRating / comments.length;

        return averageRating;
        };



  useEffect(() => {
    fetchMovie();
    fetchUser();
    fetchLikes();
    fetchComments();
  }, []);

  return (
    <div>
        {movie && (
            <div className="container-fluid bg-dark text-light p-4 top-container-fluid">
               <Link to={`/Project/search`}>
                    <button className="btn btn-info"> 
                    <i className="fa-solid fa-arrow-left"></i> 
                    </button>
                    </Link>
                <div className="row animate__animated animate__fadeIn">
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
                        <div>
                            <h2 className="section-title text-warning mt-5 ">Average Rating</h2>
                            <div className="average-rating text-warning">
                            <StarRating rating={calculateAverageRating()} />
                                {calculateAverageRating().toFixed(1)}
                            </div>
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
                        <>
                        <button 
                          onClick={likeMovie}
                          className="btn btn-warning mb-4 mx-2">
                            <i class="fa-solid fa-thumbs-up"></i> Like
                        </button>
                        <button 
                          onClick={unlikeMovie}
                          className="btn btn-danger mb-4 mx-2">
                            <i class="fa-solid fa-thumbs-down"></i> Unlike
                        </button>
                        {
                        currentUser && currentUser.role === "CRITIC" && (
                            <div className="row">
                                <div className='col-sm-4 text-light'>
                                <textarea
                                    className="form-control mb-4 mx-2"
                                    placeholder="Comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            
                            <div>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                                <label key={star} className="star-label">
                                    <input
                                    type="radio"
                                    name="rating"
                                    value={star}
                                    checked={rating === star}
                                    onChange={() => handleRatingChange(star)}
                                    />
                                    <span className="star">&#9733;</span>
                                </label>
                                ))}
                            </div>
                            <button 
                            onClick={commentMovie}
                            className="btn btn-warning mb-4 mx-2 mt-4">
                                <i class="fa-solid fa-comment"></i> Rate & Review
                            </button>
                            </div>
                        </div>
                )}
                        </>
                    )
                }
                    <div className="col-sm-10 text-light">
                        <h2>Reviews</h2>
                        <ul className="list-group">
                        {comments.map((commentResult, index) => (
                            <li key={index} className="list-group-item border-0 bg-secondary text-white px-0 liked-by px-2">
                            <div className="review-header">
                                <Link to={`/Project/users/${commentResult.user._id}`} className="review-author float-start">
                                @{commentResult.user.username}
                                </Link>
                                <span className="review-rating float-end ms-auto text-end">{<StarRating rating={commentResult.rating} />}</span>
                                {currentUser && currentUser._id === commentResult.user._id && (
                                    <button
                                    className="btn btn-danger float-end float-end review-delete"
                                    onClick={() => deleteComment(commentResult)}
                                    >
                                    <i class="fa-solid fa-trash"></i>
                                    </button>
                                )}
                            </div>
                            <p className="review-text">{commentResult.comment}</p>
                            </li>
                        ))}
                        </ul>
                    </div>


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