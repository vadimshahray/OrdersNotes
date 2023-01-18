module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
     'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@screens": "./src/screens",
          "@selectors": "./src/selectors",
          "@slices": "./src/slices",
          "@styles": "./src/styles",
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
