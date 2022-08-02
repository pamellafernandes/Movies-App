import { MovieList, Movie } from "./styles";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/key";
import { api } from "../../services/api";

export default function List() {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [page, setPage] = useState("1");
  const url_api = `/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

   async function apiMovie() {
      const response = await api.get(url_api);
      console.log(response.data)
      setMovies(response.data.results);
   }

   useEffect(() => {
      apiMovie();
   },[]);

  return (
    <>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie hey={movies.id}>
              <a href="https://google.com/">
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movies.title}
                />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </>
  );
}
