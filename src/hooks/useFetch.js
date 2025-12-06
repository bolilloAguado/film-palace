import { useEffect, useState } from "react";
const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${VITE_API_KEY}`;

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchMovie = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON.Response === "True") {
          setData(responseJSON.Search);
          setError(false);
        } else {
          setError(true);
        }
        setIsLoading(false);
        console.log("data: ", responseJSON);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}${params}`);
  }, [params]);

  return { isLoading, error, data };
};