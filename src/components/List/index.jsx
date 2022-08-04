import { MovieList, Movie, Search } from "./styles";
import { useEffect, useMemo, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export default function List() {
   const [filter, setFilter] = useState('');
   const [movies, setMovies] = useState([]);
   const image_path = "https://image.tmdb.org/t/p/w500";
   const [page, setPage] = useState("1");
   const url_api = `/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-BR&page=${page}`;

   async function apiMovie() {
      const response = await api.get(url_api);
      console.log(response.data);
      setMovies(response.data.results);
   }

   useEffect(() => {
      apiMovie();
   }, []);


   const moviesFiltered = useMemo(() =>{
      const filterLowerCase = filter.toLowerCase();
      
      return movies.filter(movie =>{
         return movie.title.toLowerCase().includes(filterLowerCase);
      })
   },[filter])
  const moviesToDisplay = filter ? moviesFiltered:movies;
   return (
      <>
      <Search type="text" placeholder="Pesquisar..."
         value={filter}
         onChange={(event) => setFilter(event.target.value)}
      />
         <MovieList>
            {moviesToDisplay.map((movie) => {
               return (
                  <Movie hey={movies.id}>
                     <Link to={`/details/${movie.id}`}>
                        <img src={`${image_path}${movie.poster_path}`} alt={movies.title} />
                     </Link>

                     <span>{movie.title}</span>
                  </Movie>
               );
            })}
         </MovieList>
      </>
   );
}
