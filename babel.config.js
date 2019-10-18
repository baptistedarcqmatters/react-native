module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          ui: './src/ui',
          business: './src/business',
          technical: './src/techical',
          src: './src',
        },
      },
    ],
  ],
};
