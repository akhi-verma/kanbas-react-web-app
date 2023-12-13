import { BsFilm, BsPeople, BsHeart, BsClockHistory, BsBoxArrowInRight, BsPersonPlus } from 'react-icons/bs';
import "./home.css";
import { Link } from "react-router-dom";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageRoller.css'; // Create a CSS file for styling
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const { currentUser }  = useSelector((state) => state.userReducer);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    slidesToShow: 1, // Number of images visible at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed as needed
    pauseOnHover: true,
  };  
  const images = [
    'https://posters.movieposterdb.com/23_07/2023/10545296/l_the-hunger-games-the-ballad-of-songbirds-and-snakes-movie-poster_af992b69.jpg',
    'https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg',
    'https://posters.movieposterdb.com/23_06/2022/11290914/l_spider-man-across-the-spider-verse-part-one-movie-poster_37d41ec0.jpg',
    'https://posters.movieposterdb.com/15_07/2015/1392190/l_1392190_50142848.jpg',
    'https://posters.movieposterdb.com/08_05/2008/468569/l_468569_f0e2cd63.jpg',
    'https://posters.movieposterdb.com/23_10/0/13287846/l_napoleon-movie-poster_de769dad.jpg',
    'https://posters.movieposterdb.com/23_02/2022/3915174/l_puss-in-boots-the-last-wish-movie-poster_d9ebf9f6.jpg',
    'https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg',
    'https://posters.movieposterdb.com/11_07/2011/1201607/l_1201607_06d25beb.jpg',

    // Add more image URLs to the array
  ];

  return (
    <div className="mt-5 total-container bg-dark text-light">
      {currentUser && (
          <div className="rowa">
            <div className="col-sm-12">
              <h1 className="heading">Welcome, {currentUser.username}!</h1>
            </div>
          </div>
      )}
    <header className="text-center mb-5 animate__animated animate__fadeInDown">
      <h1 className="heading">Welcome to MovieInfo</h1>
      <p className="lead animate__animated animate__fadeInUp">Your Movie Hub for Discovery and Connection</p>
      <p className="subtitle">Explore a vast collection of movies, connect with enthusiasts, and personalize your movie journey.</p>
    </header>

    <div className="row justify-content-center">
      <div className='col-sm-12 animate__animated animate__fadeInLeft'>
    <Slider {...settings}>
      {/* Images for the first container (roll-LL) */}
      <div className="items-container roll-LL">
      <div className="item">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="" className="company float-start" />
        ))}
      </div>
      </div>
      </Slider>
      </div>
      </div>

    <section className="my-5">
      <div className="row">
        <div className="text-center col-md-2 animate__animated animate__fadeInLeft text-warning">
        <Link to="/Project/search" className="text-decoration-none text-warning">
        <BsFilm size={50} className="mb-3 icon" />
        <h2>Discover Movies</h2>
        <p>Search and explore a vast collection of movies. Find details, ratings, and more!</p>
      </Link>
        </div>
        <div className="col-md-8 text-center animate__animated animate__fadeInUp text-info">
        {currentUser ? (
          <Link to={`/project/users/${currentUser._id}`} className="text-decoration-none text-info">
          <BsPeople size={50} className="mb-3 icon" />
          <h2>Connect with Movie Enthusiasts</h2>
          <p>Follow others with similar interests, share your favorite movies, and discover new ones.</p>
        </Link>
        ) : (
          <Link to="/Project/signup" className="text-decoration-none text-info">
          <BsPeople size={50} className="mb-3 icon" />
          <h2>Connect with Movie Enthusiasts</h2>
          <p>Follow others with similar interests, share your favorite movies, and discover new ones.</p>
        </Link>
        )}      
        </div>
        <div className="text-center col-md-2 animate__animated animate__fadeInRight text-danger">
        {currentUser ? (
          <Link to={`/project/users/${currentUser._id}`} className="text-decoration-none text-danger">
          <BsHeart size={50} className="mb-3 icon" />
          <h2>Personalized Experience</h2>
          <p>Like movies, get recommendations, and curate your own movie list for a personalized movie journey.</p>
        </Link>
        ) : (
        <Link to="/Project/signin" className="text-decoration-none text-danger">
          <BsHeart size={50} className="mb-3 icon" />
          <h2>Personalized Experience</h2>
          <p>Like movies, get recommendations, and curate your own movie list for a personalized movie journey.</p>
        </Link>
        )}
        </div>
      </div>
    </section>

    <section className="my-5">
      <div className="row justify-content-center">
        <div className="mx-2 col-sm-2 animate__animated animate__fadeInLeft text-success text-center">
        <Link to="/Project/search" className="text-decoration-none text-success">
          <BsClockHistory size={50} className="mb-3 icon" />
          <h2>Stay Updated</h2>
          <p>Receive the latest information on movies, shows, and more.
          Explore reviews from well-known critics and get insights into the latest movies.
          </p>
          </Link>
        </div>
      </div>
    </section>
    {!currentUser ? (
    <section className="mx-2 my-5 animate__animated animate__fadeIn">
      <div className='col-sm-4 float-start text-center'>
      <h2>Get Started Now</h2>
      <p>Sign up today to start your personalized movie journey!</p>
      <button className="btn btn-primary btn-lg btn-hover"> 
       <Link to={`/Project/signup`}>
       <BsPersonPlus className='me-2' /> 
        Sign up
        </Link>
      </button>
      </div>
      <div className='col-sm-4 float-end text-center'>
      <h2>Already a member?</h2>
      <p><br/></p>
      <button className="btn btn-primary btn-lg btn-hover"> 
       <Link to={`/Project/signin`}>
       <BsBoxArrowInRight className='me-2' /> 
        Sign in
        </Link>
      </button>
      </div>
    </section>
    )
    : (
      <div className="row">
        <div>
        <Link to={`/Project/users/${currentUser._id}`}>
        <p></p>
        <button className="btn btn-primary btn-lg btn-hover"> 
         <BsPeople className='me-2' /> 
         Click here to view your likes and followers        
         </button>
        </Link>
        </div>  
      </div>
    )}
</div>
  );
}

export default Home;