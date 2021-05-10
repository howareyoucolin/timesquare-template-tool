/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path');

// config-overrides.js
module.exports = function override(config, env) {
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: { '~src': path.resolve(__dirname, 'src/') },
    },
  };

  return newConfig;
};
