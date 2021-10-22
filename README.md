# War

![War Screenshot](https://github.com/zachstence/war/blob/main/screenshot.png)

## Table of Contents
- [Demo](#demo)
- [Running Locally](#running-locally)
- [Technology](#technology)
- [Architecture](#architecture)
- [Next Steps](#next-steps)

## Demo
You can access a live version of the game at [zachstence.github.io/war](https://zachstence.github.io/war).

## Running Locally
To run the code locally, first clone the repository
```console
$ git clone https://github.com/zachstence/war.git && cd war
```

Then, run the application
```console
$ npm start
```

Last, navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Technology
This project uses the Create React App [TypeScript Template](https://create-react-app.dev/docs/adding-typescript/) for the project framework, [node-sass](https://www.npmjs.com/package/node-sass) to compile SCSS to CSS, and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing.

## Architecture
The core functionality and state of the game is housed in the [`<Game />`](src/components/Game/Game.tsx) component which interacts with a [Deck](src/Deck/Deck.ts) for each player. The [components](src/components) handle all of the rendering.

Both the [Deck](src/Deck/Deck.ts) and each [component](src/components) are (at least decently) tested.

## Next Steps
- Improved styling
- Better responsive design for different screen sizes
- More statistics on player win rate, total rounds played, etc.