module.exports = {
  presets: ['module:@react-native/babel-preset'],
  //env eklenecek
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
