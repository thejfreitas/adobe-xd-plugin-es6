# Adobe XD plugin using modern React boilerplate

A Adobe XD plugin sample using modern React. Currently supporting React v17.0.1

# Development

1. Install `yarn` if not available

```
npm install -g yarn
```

2. Install dependency packages

```
yarn install
```

2.1 If you want install packages separately

Dependencies

```
yarn add react react-dom
```

Development dependencies

```
yarn add @babel/cli  @babel/core  @babel/node  @babel/plugin-transform-react-jsx  @babel/polyfill  @babel/preset-env  babel-loader  nodemon  webpack  webpack-cli --dev
```

3. Start compiling

In order to watch all modifications in the development process, you have to run this command.

```
yarn watch
```

Webpack will watch every file modification and will compile to a new bundle in `main.js` file. You must reload your plugin on Adobe XD to make your modifications take effect.
