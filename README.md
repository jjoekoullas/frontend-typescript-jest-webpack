# frontend-typescript-jest-webpack
A minimal setup for frontend development in TypeScript and SASS, with Jest for tests, and builds with Webpack.

# Development
`npm start` kicks off the webpack dev server, which will automatically rebuild and refresh the browser on changes.

`npm test:watch` starts Jest in watch mode, rerunning unit tests impacted by the changed files. It is worth noting that this requires static dependencies (so not dynamic module loading)
