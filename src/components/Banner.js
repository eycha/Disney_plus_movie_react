import React, {useEffect, useState} from "react";
import axiosInstance from "../api/axios";
import requests from "../api/request";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axiosInstance.get(requests.fetchNowPlaying);

    // const response = await axios.get(
    //   "https://api.themoviedb.org/3/movie/now_playing?api_key=f643ad5042c57933d8eec6a7a984a73c&language=ko-KR&page=1"
    // );
    console.log("!!!res", response);

    // 여러 영화중 하나의 ID 가져오기
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    //특정 영화의 더 상세한 정보를 가져오괴 (비디오 정보도 포함)
    const {data: movieDetail} = await axiosInstance.get(`movie/${movieId}`, {
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
        backgroundImage: `url("/images/home-background.png")`,
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
