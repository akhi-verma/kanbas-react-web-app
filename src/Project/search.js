import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import * as client from "./client"; 
import "./search.css";

function Search() {
  const { search, year } = useParams();
  const [searchTerm, setSearchTerm] = useState(search || "Spider-man");
  const [searchYear, setsearchYear] = useState(year || "2023");
  const [results, setResults] = useState([]);
  const Navigate = useNavigate();

  const fetchMovies = async (search, year) => {
    const results = await client.findMoviesByTitle(searchTerm, searchYear);
    setResults(results);
    setSearchTerm(search);
    setsearchYear(year);
  };

  useEffect(() => {
    if (search && year) {
      fetchMovies(search, year);
    }
  }, [search, year, results]);

  return (
    <div className="container bg-dark text-light p-4">
      <h1 className="mt-4 mb-3 heading">Movie Search</h1>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control"
          placeholder="Movie Name" 
          value={searchTerm}
          onChange={event => {setSearchTerm(event.target.value)}}
        />
        <input 
          type="number" 
          className="form-control"
          placeholder="Year" 
          value={searchYear}
          onChange={event => {setsearchYear(event.target.value)}}
        />
        <div className="input-group-append">
          <button 
            className="btn btn-primary mx-3" 
            type="button" 
            onClick={() => Navigate(`/Project/search/${searchTerm}/${searchYear}`)}
          >
            <i class="fa-solid fa-film mx-2"></i>
            Search
          </button>
        </div>
      </div>
      <h2 className="mt-4 mb-3">Results</h2>
      <ul className="list-group">
        {results && results.map((search, index) => (
          <Link to={`/Project/Details/${search.imdbID}`} key={index} className="text-decoration-none">
            <li className="list-group-item rounded d-flex justify-content-between align-items-center mb-3 bg-secondary">
              <div className="mr-3">
                <strong className="text-light">Title: {search.Title}</strong>
                <br />
                <strong className="text-light">Year: {search.Year}</strong>
              </div>
              <img src={search.Poster} alt={search.Title} className="img-thumbnail" style={{ width: '150px', height: '200px' }} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Search;
