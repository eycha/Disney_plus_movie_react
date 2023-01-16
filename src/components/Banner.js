import React, {useEffect, useState} from "react";
import axios from "../api/axios";
import requests from "../api/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);
    //여러 영화중 하나의 ID 가져오기
    const movieId =
      response.data.result[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    //특정 영화의 더 상세한 정보를 가져오괴 (비디오 정보도 포함)
    const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
      params: {append_to_response: "videos"},
    });
    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <div className="banner__buttons">
          {movie?.videos?.results[0]?.key && (
            <button className="banner__button play">Play</button>
          )}
        </div>
        <p className="banner__description">{movie.overview}</p>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
