/* eslint-env jest */

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }) => children,
  };
});

jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => ({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }),
  };
});
