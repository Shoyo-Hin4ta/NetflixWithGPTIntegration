import React from 'react'
import useMainVideo from '../hooks/useMainVideo'
import { useSelector } from 'react-redux';

const VideoContainer = ({id}) => {

  useMainVideo(id);

  const movieTrailer = useSelector(store => store.movies.movieTrailer);

  if (!movieTrailer) return;

  return (
    <div className='w-screen'>
      <iframe className= 'w-full h-full aspect-video mt-0 z-40 sm:mt-0' 
      src={"https://www.youtube-nocookie.com/embed/"+movieTrailer?.key+"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoContainer