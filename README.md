# About Project

### Learnings

Set Up using create-react-app. Configured Tailwind. 

Worked on the login page and form along with the data validation where using state variable, The same form component is also being used for sign up.

Firebase Setup, implemented Sign Up/ Sign using firebase APIs. 

Managing the state of the user using redux.

Successfull authentication of user using firebase APIs, updating the user slice in the store and redirecting to the browse page.

Fetching the movies data from the API call by making a custom hook. Trying to maintain modularity throughout the project.

Building the browse page, where TMDB API is called to get movies from those movies we make a call for video API which has the youtube video key and video is embeded in the main container.

For the second container, pretty similar to the main, we get Now Playing Movies, Top Rated Movies and display all the poster of those movies. To display movies poster ids are mapped and displayed as Movie Cards.

All the while, we are storing in the incoming movie data in our store, in the movieSlice.

Created the UI of the GPT - recommend page, which will suggest the movies to the user based on his preference. 
As an additional feature, Language functionality is added to the GPT-recommend page. Also, state of language is managed by langSlice in the appStore.

