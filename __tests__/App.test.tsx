/**
 * @format
 */
/* eslint-env jest */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }: { children: React.ReactNode }) =>
    children,
}));

jest.mock('@react-navigation/drawer', () => {
  return {
    DrawerToggleButton: () => <></>,
    createDrawerNavigator: () => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({
        children,
        component: Component,
      }: {
        children?: (() => React.ReactNode) | React.ReactNode;
        component?: React.ComponentType;
      }) => {
        if (typeof children === 'function') {
          return children();
        }

        if (Component) {
          return <Component />;
        }

        return <>{children}</>;
      },
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: () => ({
      Navigator: ({ children }: { children: React.ReactNode }) => children,
      Screen: ({
        children,
        component: Component,
      }: {
        children?: (() => React.ReactNode) | React.ReactNode;
        component?: React.ComponentType;
      }) => {
        if (typeof children === 'function') {
          return children();
        }

        if (Component) {
          return <Component />;
        }

        return <>{children}</>;
      },
    }),
  };
});

import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
