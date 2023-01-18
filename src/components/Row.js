import React, { useEffect, useState, useCallback } from "react";
import axios from "../api/axios";

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMoives] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    console.log("response", response);
    setMoives(response.data.results);
  }, [fetchUrl]);

  return <div>Row</div>;
};

export default Row;
