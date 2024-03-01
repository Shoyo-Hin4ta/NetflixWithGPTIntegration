import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {

  //creating a custom hook which updates our store.

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    
    <div className='relative'>
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
      
      <MainContainer/>
      <SecondContainer />

    </div>
  )
}

export default Browse