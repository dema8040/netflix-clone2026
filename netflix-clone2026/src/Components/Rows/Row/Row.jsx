import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
// import requests from "../../../utils/requests";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick=(movie)=>{
    if (trailerUrl){
        setTrailerUrl("")
    }
    else{
        movieTrailer(movie?.name || movie?.original_name)
          .then((url) => {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            console.log(urlParams)
            console.log(urlParams.get("v"))
            setTrailerUrl(urlParams.get("v"));

          })
          
    }
  }

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
        // controls: 0,
        // modestbranding: 1,
        // showinfo: 0,
        // rel: 0,
      },
    };

  return (
    <div className="row">
      <h1>{title}</h1>

      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>

      {/* <h2>Netflix Originals</h2> */}
    </div>
  );
};

export default Row;
