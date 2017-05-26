# vilib
### React SPA to manage your movie collection

The user should be able to CRUD movies.

## Setup

Install dependencies:

```sh
$ npm install
```

Boot up the app:

```sh
$ npm start
```

To run the server in release mode, set the environment variable `NODE_ENV=production`

## What's Done And What's Left
- CRUD only, no actual storing for the data.
- No pictures uploading.
- Some tests still missing, on Redux action in particular.

## Why Redux
- Redux for CRUD is widely used and it was a sample initial problem Abramov had picked for presentation of Redux.
- In situation store is LocalStorage or similar Redux still makes sense for its "controller" bindings.
- Maybe an observer pattern based solution like MobX would be simplier.

## Technologies

As an initial help starter [generator-redux-stack](https://github.com/zakangelle/generator-redux-stack) was used. It includes:

* [react (v15)](https://facebook.github.io/react/) - View layer
* [react-router (v4)](https://reacttraining.com/react-router/web/guides/quick-start) - Router
* [redux](https://github.com/reactjs/redux) - State management
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async actions
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack (v2)](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite

I've used it for first time. And there were some drawbacks of this starter I've been struggling with, especially on Jest side. Package [redux-crud](https://github.com/Versent/redux-crud) was choosen as DRY helper for CRUD implementation. My pet project [generator-not-bad-react-component](https://github.com/not-bad-react/generator-not-bad-react-component) was taken for component structure scaffolding. Maybe that's all a little bit overingineering, but in fact it seems lke a very suitable concept for production-ready code.

As a UI component library was taken [material-ui](http://www.material-ui.com/). Really nice API and shiny design!

## Test

Run tests:

```sh
$ npm test
```
