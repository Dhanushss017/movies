import React, { useState } from "react";
import "../App.css";

const MoviesData = (props) => {
  const { movies } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="d-flex justify-content-between">
        <img src="movielogo.png" alt="Logo" className="img-fluid " />
        <input
          className="form-control  shadow-none fs-16 my-5 w-auto"
          placeholder="Search Movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
        />
      </div>
      <div className="row mb-5">
        {movies &&
          movies.map((item) => {
            const shouldShowMovie =
              searchQuery === "" ||
              item.title.toLowerCase().includes(searchQuery.toLowerCase());
            const moviesGenres = item.genres.join(" ");
            return (
              shouldShowMovie && (
                <div
                  className="col-12 col-md-4 col-lg-3 mb-4 mb-md-5"
                  key={item.id}
                >
                  <h1 className="fs-18 text_black text-center">
                    {moviesGenres}
                  </h1>
                  <div className="card border-0 shadow">
                    <div className="card-body p-0">
                      <img
                        src={item.poster}
                        className="img-fluid w-100"
                        alt=""
                      />
                      <div className="text-center bg_gradient">
                        <p className="pt-3 fs-17 mb-1 text-uppercase text-white fw-500">
                          {item.title}
                        </p>
                        <p className="fs-16 mt-1 mb-0 text-uppercase text-white ">
                          {item.cast}
                        </p>
                        <p className="fs-16 mb-0 pb-3 mt-2 text-white ">
                          IMDB {item.imdb_rating}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </>
  );
};

export default MoviesData;
