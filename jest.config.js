module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|react-native-drawer-layout|react-native-gesture-handler|react-native-reanimated|react-native-worklets)/)',
  ],
};
