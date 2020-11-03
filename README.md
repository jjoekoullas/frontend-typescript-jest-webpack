# frontend-typescript-jest-webpack
A minimal setup for frontend development in TypeScript and SASS, with Jest for tests, and builds with Webpack.

# Prerequisites
- Node/npm
- `npm i -g windows-build-tools` if you're on windows.

# How to use this repo
1. Cloning this repo
2. delete the .git folder
3. modify package.json to change the name/owner/etc for your project
4. rename the folder appropriate
5. consider deleting this file
6. `git init` and away you go

# Development
`npm start` kicks off the webpack dev server, which will automatically rebuild and refresh the browser on changes.

`npm test:watch` starts Jest in watch mode, rerunning unit tests impacted by the changed files. It is worth noting that this requires static dependencies (so not dynamic module loading)
