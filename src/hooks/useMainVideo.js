import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utils/moviesSlice';

const useMainVideo = (movie_id) => {


    const dispatch = useDispatch();

    const movieTrailer = useSelector(store => store.movies.movieTrailer);

    const fetchVideo = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', API_OPTIONS);

        const json  = await data.json();

        const clips = json.results.filter(clip => clip.type === "Trailer");
        const trailer = clips.length ? clips[0] : json.results[0]; 

        dispatch(addMovieTrailer(trailer));
        
    }

    useEffect(()=> {
        !movieTrailer && fetchVideo();
    }, []);

}

export default useMainVideo