# Game of Life 

This project sets an implementation of Conway's Game of Life in a React app. 

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project Structure

The implementation is hold inside the src folder in the following split:

### Components 

Holds the code for components used in this project

#### `Canvas.jsx`

Simple Canvas component with width, height and draw props. 

#### `Grid.jsx`

Canvas Wrapper component that defines draw functions and dispatches first Random Grid and sets interval for new generation grids. 

#### `Settings.jsx`

Panel with a Select element used to change between Random Generated Grid and some example patterns by using dispatch.

#### `Title.jsx`

Simple Title component that holds its own styling.

### Logic

Holds an `index.js` file with implementation logic split into three functions. 

### Patterns

Uses `oscillator.js` and `spaceship.js`  files to export patterns as constants for the App.

### Providers

Specifies a `grid.provider.jsx` file for state distribution in the solution. 

### Reducers

Declares a `grid.reducer.js` file for state processing based on grid generation and pattern setting actions. 

### Utils 

Holds a `functions.js` that declares a set of utility functions, as well as a `functions.test.js` that runs test cases for them. 
