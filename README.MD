# [Fullstack Demos](https://fullstack-demos.netlify.app/)

<a href="https://fullstack-demos.netlify.app/" target="_blank"><img src='https://user-images.githubusercontent.com/68879246/141218820-2a6c1833-0471-4db1-bd83-79b74b8e158a.png' alt='Fullstack Demos'></a>

**Fullstack Demos** is a collection of three mini fullstack applications. Each application stores/retrieves data from a MongoDB database, with the backend hosted on Heroku. Menu Manager and Contact List use full CRUD functionality, while URL Shortener only creates and reads. When adding an item with Menu Manager, the backend performs a Google image search using a custom Google search and dynamically assigns a menu image based on the item title. 

This is the first project where I incorporated testing and TDD. I began with the Figma sketch, wrote red tests, then wrote passing green tests for each component. I used React Testing Library, Jest, and Mock Service worker. Although I struggled in some places (mocking async calls), I finally began to get the hang of it at around the middle of the project.

For the backend, I wanted to get experience working with a few different types of projects. I started simple with the URL shortener, and incorporated a lot of ideas I found through Google. Contact List and Menu Manager are completely original code, and are the first things I've written that have full CRUD functionality.

Something to note for this project is that I was not focused on styling. The styles are very rudimentary, but I'm fine with that for this project!

One other thing: for the sake of simplicity, I have not implemented authentication here. Whatever you add to any of the projects can be seen by all users!

## Technology:

React, Typescript, Styled Components, React Testing Library, Jest, Mock Service Worker, Node, Express

## What I learned or used for the first time

- Styled Components (I like these now)
- Yarn (which I now prefer over npm)
- React Testing Library
- Jest
- Mock Service Worker
- A custom Google search performed on the backend
- Full CRUD functionality
- PUT and DELETE requests

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
