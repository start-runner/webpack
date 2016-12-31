const defaultStatsOptions = {
    colors: true
};

export default (config, userStatsOptions) => (input) => {
    return function webpack(log) {
        const webpackLib = require('webpack');

        return new Promise((resolve, reject) => {
            const statsOptions = {
                ...defaultStatsOptions,
                ...userStatsOptions
            };

            webpackLib(config, (err, stats) => {
                if (err) {
                    return reject(err);
                }

                log(stats.toString(statsOptions));
                resolve(input);
            });
        });
    };
};
