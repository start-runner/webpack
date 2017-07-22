# start-webpack

[![npm](https://img.shields.io/npm/v/start-webpack.svg?style=flat-square)](https://www.npmjs.com/package/start-webpack)
[![linux build](https://img.shields.io/travis/start-runner/webpack/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/webpack)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/webpack/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/webpack)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/webpack/master.svg?style=flat-square)](https://codecov.io/github/start-runner/webpack)
[![deps](https://img.shields.io/gemnasium/start-runner/webpack.svg?style=flat-square)](https://gemnasium.com/start-runner/webpack)

[Webpack 3](https://webpack.js.org/) task for [Start](https://github.com/start-runner/start). You might also need [start-webpack-dev-server](https://github.com/start-runner/webpack-dev-server).

## Install

```sh
npm install --save-dev start-webpack
# or
yarn add --dev start-webpack
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import webpack from 'start-webpack';

const start = Start(reporter());

export const build = () => start(
  files('build/'),
  clean(),
  webpack(require('conf/webpack.build'))
);
```

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`webpack(config, statsOptions)`

* `config` – [webpack config](https://webpack.js.org/configuration/)
* `statsOptions` – [webpack stats options](https://webpack.js.org/configuration/stats/), `{ colors: true }` by default
