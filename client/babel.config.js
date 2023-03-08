module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: 'RMenv',
        path: '.env',
        safe: false,
        allowUndefined: true,
      }],
    ],
  };
};
