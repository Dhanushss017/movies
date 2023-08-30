import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviesData from "./component";
const App = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wookie.codesubmit.io/movies",
          {
            headers: {
              Authorization: "Bearer Wookie2019",
            },
          }
        );
        setMovies(response.data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      
      <MoviesData  movies={movies} />
    </div>
  );
};

export default App;
