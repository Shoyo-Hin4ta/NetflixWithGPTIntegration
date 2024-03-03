import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from '../utils/gptSlice'

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

        // const filteredData = moviesDetail.map()

        console.log(moviesDetail);

        const filteredMovies = moviesDetail.map((rMovies) => {
            const reducedMovObj = rMovies.filter((movie) => {
                return movie.original_language === "en" || movie.original_language === "hi";
            })
            return reducedMovObj;
        });

        // console.log(filteredData);

        if (!filteredMovies) return <h1> The Movies recommended should be in english or hindi languages. </h1>

        dispatch(addRecommendedMovies(filteredMovies));

    }
  

    useEffect(() => {
        fetchMoviesData(moviesArr);
    }, [])
}

export default useGetRecommendedMovies