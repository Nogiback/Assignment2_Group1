import React, { createContext, useContext, useState } from 'react';
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

type HomeTabParamList = {
  'Jacket List': undefined;
  Profile: undefined;
  Favorites: undefined;
};

type HomeStateContextValue = {
  favoriteIds: number[];
  onToggleFavorite: (jacketId: number) => void;
};

type TabIconProps = {
  routeName: keyof HomeTabParamList;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();
const HomeStateContext = createContext<HomeStateContextValue | null>(null);

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

function HomeTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const isEnabledTab = route.name === 'Jacket List';
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
            accessibilityState={{
              selected: isFocused,
              disabled: !isEnabledTab,
            }}
            onPress={() => {
              if (isEnabledTab) {
                navigation.navigate(route.name);
              }
            }}
            style={[
              styles.customTabButton,
              !isEnabledTab && styles.customTabButtonDisabled,
              isFocused && styles.customTabButtonActive,
            ]}>
            <TabItemIcon
              routeName={route.name as keyof HomeTabParamList}
              color={isFocused ? COLORS.blue : COLORS.grey}
              size={22}
            />
            <Text
              style={[
                styles.customTabButtonText,
                !isEnabledTab && styles.customTabButtonTextDisabled,
                isFocused && styles.customTabButtonTextActive,
              ]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function renderHomeTabBar(props: BottomTabBarProps) {
  return <HomeTabBar {...props} />;
}

function JacketListTabScreen() {
  const homeState = useContext(HomeStateContext);

  if (!homeState) {
    return null;
  }

  return (
    <JacketListScreen
      favoriteIds={homeState.favoriteIds}
      onToggleFavorite={homeState.onToggleFavorite}
    />
  );
}

function HomeScreen() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const handleToggleFavorite = (jacketId: number) => {
    setFavoriteIds(currentFavorites =>
      currentFavorites.includes(jacketId)
        ? currentFavorites.filter(id => id !== jacketId)
        : [...currentFavorites, jacketId],
    );
  };

  return (
    <HomeStateContext.Provider
      value={{
        favoriteIds,
        onToggleFavorite: handleToggleFavorite,
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={renderHomeTabBar}>
        <Tab.Screen name="Jacket List" component={JacketListTabScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </HomeStateContext.Provider>
  );
}

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
  customTabButtonDisabled: {},
  customTabButtonText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  customTabButtonTextActive: {
    color: COLORS.blue,
  },
  customTabButtonTextDisabled: {
    color: COLORS.grey,
  },
});

export default HomeScreen;
