// HomeScreen.tsx
// The main screen of the app that contains a bottom tab navigator with three tabs: Jacket List, Profile, and Favorites.

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  FavoriteNavIcon,
  JacketNavIcon,
  ProfileNavIcon,
} from '../components/NavigationIcons';
import FavoritesScreen from './FavoritesScreen';
import JacketListScreen from './JacketListScreen';
import ProfileScreen from './ProfileScreen';
import { COLORS } from '../theme/colors';

// Define the types for the bottom tab navigator
type HomeTabParamList = {
  'Jacket List': undefined;
  Profile: undefined;
  Favorites: undefined;
};

type TabIconProps = {
  routeName: keyof HomeTabParamList;
  color: string;
  size: number;
};

// Create the bottom tab navigator
const Tab = createBottomTabNavigator<HomeTabParamList>();

// A helper component to render the appropriate icon for each tab based on the route name.
function TabItemIcon({ routeName, color, size }: TabIconProps) {
  switch (routeName) {
    case 'Jacket List':
      return <JacketNavIcon size={size} color={color} />;
    case 'Profile':
      return <ProfileNavIcon size={size} color={color} />;
    case 'Favorites':
      return <FavoriteNavIcon size={size} color={color} />;
    default:
      return null;
  }
}

// Custom tab bar component to render the bottom tabs with icons and labels, and handle navigation.
function HomeTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : typeof options.title === 'string'
            ? options.title
            : route.name;

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            onPress={() => navigation.navigate(route.name)}
            style={[
              styles.customTabButton,
              isFocused && styles.customTabButtonActive,
            ]}
          >
            <TabItemIcon
              routeName={route.name as keyof HomeTabParamList}
              color={isFocused ? COLORS.blue : COLORS.grey}
              size={22}
            />
            <Text
              style={[
                styles.customTabButtonText,
                isFocused && styles.customTabButtonTextActive,
              ]}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

// Helper function to render the custom tab bar
function renderHomeTabBar(props: BottomTabBarProps) {
  return <HomeTabBar {...props} />;
}

// The main HomeScreen component that sets up the bottom tab navigator with its screens.
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderHomeTabBar}
    >
      <Tab.Screen name="Jacket List" component={JacketListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

// Define the styles for the custom tab bar and its buttons, including active states.
const styles = StyleSheet.create({
  customTabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
  },
  customTabButton: {
    minWidth: 92,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  customTabButtonActive: {},
  customTabButtonText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  customTabButtonTextActive: {
    color: COLORS.blue,
  },
});

export default HomeScreen;
