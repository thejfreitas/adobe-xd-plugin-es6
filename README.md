# Adobe XD plugin using modern React boilerplate

A Adobe XD plugin sample using modern React. Currently supporting React v17.0.1

[Official Adobe XD Documentation](https://adobexdplatform.com/plugin-docs/)

# Development

### 1. Install `yarn` if not available

```
npm install -g yarn
```

### 2. Install dependency packages

```
yarn install
```

### 2.1 If you want install packages separately

#### Dependencies

```
yarn add react react-dom
```

#### Development dependencies

```
yarn add @babel/cli  @babel/core  @babel/node  @babel/plugin-transform-react-jsx  @babel/polyfill  @babel/preset-env  babel-loader  nodemon  webpack  webpack-cli --dev
```

### 3. Start compiling

In order to watch all modifications in the development process, you have to run this command.

```
yarn watch
```

Webpack will watch every file modification and will compile to a new bundle in `main.js` file. You must reload your plugin on Adobe XD to make your modifications take effect.

## Debugging

It's possible debug the plugin using Chrome Dev Tools (You must use Chrome).

You will find the configuration file `debug.json` and all details to enable the debugging mode can be found on the [Abode XD Documentation](https://adobexdplatform.com/plugin-docs/tutorials/debugging/#2-launch-chrome-devtools)

## Typography

[Reference](https://www.adobe.io/photoshop/uxp/uxp/reference-spectrum/Typography/)

Supported components

### Heading

```
<sp-heading size="XXXL">Heading</sp-heading>
<sp-heading size="XXL">Heading</sp-heading>
<sp-heading size="XL">Heading</sp-heading>
<sp-heading size="L">Heading</sp-heading>
<sp-heading size="M">Heading</sp-heading>
<sp-heading size="S">Heading</sp-heading>
<sp-heading size="XS">Heading</sp-heading>
<sp-heading size="XXS">Heading</sp-heading>

```

### Body text

```
<sp-body size="XXXL">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="XXL">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="XL">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="L">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="M">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="S">Lorem ipsum dolor sit amet.</sp-body>
<sp-body size="XS">Lorem ipsum dolor sit amet.</sp-body>
```

### Detail

```
<sp-detail>Lorem ipsum dolor sit amet.</sp-detail>
```

### Label

```
<sp-label>Lorem ipsum dolor sit amet.</sp-label>
```
