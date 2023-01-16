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

  return <div>Banner</div>;
};

export default Banner;
