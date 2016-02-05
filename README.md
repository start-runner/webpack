[![npm](https://img.shields.io/npm/v/start-webpack.svg?style=flat-square)](https://www.npmjs.com/package/start-webpack)
[![travis](http://img.shields.io/travis/start-runner/webpack.svg?style=flat-square)](https://travis-ci.org/start-runner/webpack)
[![deps](https://img.shields.io/gemnasium/start-runner/webpack.svg?style=flat-square)](https://gemnasium.com/start-runner/webpack)

[Webpack](https://webpack.github.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-webpack
```

## Usage

```js
// tasks.js
import start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import clean from 'start-clean';
import * as webpack from 'start-webpack';

const start = Start(logger());

export function webpackBuild() {
    return start(
        files('build/'),
        clean(),
        webpack.build(require('conf/webpack.build'))
    );
}

export function webpackDev() {
    return start(
        webpack.dev(require('conf/webpack.dev'))
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start ./tasks",
  "webpack-build": "npm run task webpackBuild",
  "webpack-dev": "npm run task webpackDev"
}
```

## Arguments

### build

`webpack.build(config, statsOptions)`

* `config` – [webpack config](https://webpack.github.io/docs/configuration.html)
* `statsOptions` – [webpack stats options](https://webpack.github.io/docs/node.js-api.html#stats), default:

```js
{
    colors: true,
    children: false,
    assets: false,
    version: false,
    hash: false,
    chunkModules: false
}
```

### dev

`webpack.dev(config, port, options)`

* `config` – [webpack config](https://webpack.github.io/docs/configuration.html)
* `port` – webpack-dev-server port, `3000` by default
* `options` – [webpack-dev-server options](https://webpack.github.io/docs/webpack-dev-server.html#api) + [webpack-dev-middleware options](https://webpack.github.io/docs/webpack-dev-middleware.html), default:

```js
{
    hot: true,
    stats: {
        colors: true,
        children: false,
        assets: false,
        version: false,
        hash: false,
        chunkModules: false
    }
}
```
