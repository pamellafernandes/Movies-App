import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { api } from "../../services/api";
import { Container } from './styles';

function Details() {
    const { id } = useParams()
    const url_api = `/movie/${id}?api_key=${process.env.API_KEY}&language=pt-BR`;
    const image_path = "https://image.tmdb.org/t/p/w500";
    const [movie, setMovie] = useState({})

    async function apiMovie() {
        const response = await api.get(url_api);
        console.log(response.data);
        const movie = {
            id,
            title: response.data.title,
            sinopse: response.data.overview,
            image: `${image_path}${response.data.poster_path}`,
            releaseDate: response.data.release_date
        }
        setMovie(movie);
     }
  
     useEffect(() => {
        apiMovie();
     }, [id]);
  

    return(
        <Container>
           <div className='movie'>
                <img src={movie.image} alt={movie.sinopse}/>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className='release-date'>Release date: {movie.releaseDate}</span>
                    <a href='/'>Go Back</a>
                </div>
            </div> 
        </Container>
    );
};

export default Details;