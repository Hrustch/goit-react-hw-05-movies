import { getSearchMovie } from 'api/API';
import MovieLink from 'components/Movie/MovieLink';
import React, { useState } from 'react';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(getSearchMovie(query));
    getSearchMovie(query)
    .then(data => {
      setMovieList(data.results);
    })
    .catch((err)=>{console.log(err)})
  };

  const handleChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={event => {
          handleSubmit(event);
        }}
      >
        <input
          plaseholder="Search movie"
          name="query"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {movieList && (
        <ul>
          {movieList.map(movie => (
            <MovieLink movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </>
  );
};
