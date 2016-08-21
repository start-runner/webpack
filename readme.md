# start-webpack

[![npm](https://img.shields.io/npm/v/start-webpack.svg?style=flat-square)](https://www.npmjs.com/package/start-webpack)
[![linux build](https://img.shields.io/travis/start-runner/webpack.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/webpack)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/webpack.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/webpack)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/webpack.svg?style=flat-square)](https://codecov.io/github/start-runner/webpack)
[![deps](https://img.shields.io/gemnasium/start-runner/webpack.svg?style=flat-square)](https://gemnasium.com/start-runner/webpack)

[Webpack](https://webpack.github.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-webpack
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import * as webpack from 'start-webpack';

const start = Start(reporter());

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

See [documentation](https://github.com/start-runner/start#readme) for details.

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
