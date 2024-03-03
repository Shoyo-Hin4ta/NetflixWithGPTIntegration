import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";


const useGetRecommendedMovies = (moviesArr) => {

    const dispatch = useDispatch();
    
    const movieDetail = async(movie) => {

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json();

        return json.results;
    }

    const fetchMoviesData = async(moviesArr) => {
        
        const moviesPromisesArr = moviesArr.map(movie => movieDetail(movie));
        
        // now need to resolve the promise

        const moviesDetail = await Promise.all(moviesPromisesArr);

        

    }
  

    useEffect(() => {
        fetchMoviesData(moviesArr);
    }, [])
}

export default useGetRecommendedMovies