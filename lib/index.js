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

      webpackLib(config, (error, stats) => {
        if (error) {
          return reject(error);
        }

        log(stats.toString(statsOptions));
        resolve(input);
      });
    });
  };
};
