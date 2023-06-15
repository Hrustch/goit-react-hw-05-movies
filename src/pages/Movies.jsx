import { getSearchMovie } from 'api/API';
import MovieLink from 'components/Movie/MovieLink';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movieList, setMovieList] = useState();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [value, setValue] = useState(searchQuery.get('query') || '');
  const [query, setQuery] = useState(searchQuery.get('query'))

  console.log(`MovieList: `, movieList);
  console.log(`searchQuery: `, searchQuery);
  console.log(`value: `, value);

  useEffect(() => {
    if (query) {
      setSearchQuery({ query: value });
      getSearchMovie(query)
        .then(data => {
          setMovieList(data.results);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();    
    setQuery(value)
  };

  const handleChange = event => {
    setValue(event.target.value);
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
          value={value}
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

export default Movies;
