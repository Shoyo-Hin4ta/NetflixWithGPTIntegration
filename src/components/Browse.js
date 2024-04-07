import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GPTRecommendations from './GPTRecommendations';
import { useSelector } from 'react-redux';


const Browse = () => {

  //creating a custom hook which updates our store.

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();


  const buttonState = useSelector(store => store.gptPage.isMovieRecommendationClicked);


  return (
    
    <div className='relative h-screen w-full border border-black'>
      <Header />
      {/* Layout of our browse */}

      {/* Main Container
            Video
            Text (title + buttons)

      Second Conatiner
          Movies List 1
            Movie Card 1
            Movie Card 2
          Movies List 2
            Movie Card 1
            Movie Card 2
             
      */}


      {buttonState ? (<>
        <GPTRecommendations/>
      </>) : <>
        <MainContainer/>
        <SecondContainer />
      </>}


      
      
      

    </div>
  )
}

export default Browse