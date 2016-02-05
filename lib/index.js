const defaultStatsOptions = {
    colors: true,
    children: false,
    assets: false,
    version: false,
    hash: false,
    chunkModules: false
};
const defaultPort = 3000;

export const build = (config, userStatsOptions) => (input) => {
    return function webpackBuild(log) {
        const webpack = require('webpack');

        return new Promise((resolve, reject) => {
            const statsOptions = {
                ...defaultStatsOptions,
                ...userStatsOptions
            };

            webpack(config, (err, stats) => {
                if (err) {
                    return reject(err);
                }

                log(stats.toString(statsOptions));
                resolve(input);
            });
        });
    };
};

export const dev = (config, port = defaultPort, userOptions) => (input) => {
    return function webpackDev(log) {
        const webpack = require('webpack');
        const WebpackDevServer = require('webpack-dev-server');

        return new Promise((resolve, reject) => {
            const options = {
                hot: true,
                stats: defaultStatsOptions,
                ...userOptions
            };
            const server = new WebpackDevServer(webpack(config), options);

            server.listen(port, err => {
                if (err) {
                    return reject(err);
                }

                log(`http://localhost:${port}/webpack-dev-server/`);
                resolve(input);
            });
        });
    };
};
