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

Recommended Movies are stored in the store, for each movie . An API call is made to the TMDB to search and get that movies to display it in the page, along with overview title and poster of the image.

Did memoization for the apis. So, they are not called each and every time.

# Lauching the project in your machine

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

