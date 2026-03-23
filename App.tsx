import React from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  DrawerNavigationProp,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  AboutNavIcon,
  ContactNavIcon,
  HomeNavIcon,
} from './components/NavigationIcons';
import AboutAppScreen from './screens/AboutAppScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import HomeScreen from './screens/HomeScreen';
import { COLORS } from './theme/colors';

type DrawerParamList = {
  Home: undefined;
  'About App': undefined;
  'Contact Us': undefined;
};

type DrawerHeaderButtonProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
};

type NavigationIconProps = {
  color: string;
  size: number;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerHeaderButton({ navigation }: DrawerHeaderButtonProps) {
  return (
    <Pressable
      accessibilityLabel="Open navigation menu"
      accessibilityRole="button"
      onPress={() => navigation.toggleDrawer()}
      style={({ pressed }) => [
        styles.drawerButton,
        pressed && styles.drawerButtonPressed,
      ]}>
      <View style={styles.drawerButtonLine} />
      <View style={styles.drawerButtonLine} />
      <View style={styles.drawerButtonLine} />
    </Pressable>
  );
}

function DrawerItemIcon({
  routeName,
  color,
  size,
}: NavigationIconProps & {
  routeName: keyof DrawerParamList;
}) {
  const iconSize = size + 2;

  switch (routeName) {
    case 'Home':
      return <HomeNavIcon size={iconSize} color={color} />;
    case 'About App':
      return <AboutNavIcon size={iconSize} color={color} />;
    case 'Contact Us':
      return <ContactNavIcon size={iconSize} color={color} />;
    default:
      return null;
  }
}

function getDrawerScreenOptions({
  navigation,
  route,
}: {
  navigation: DrawerNavigationProp<DrawerParamList>;
  route: { name: keyof DrawerParamList };
}) {
  return {
    headerStyle: styles.header,
    headerTintColor: COLORS.blue,
    headerTitleStyle: styles.headerTitle,
    headerLeft: () => <DrawerHeaderButton navigation={navigation} />,
    drawerActiveTintColor: COLORS.white,
    drawerActiveBackgroundColor: COLORS.blue,
    drawerInactiveTintColor: COLORS.black,
    drawerLabelStyle: styles.drawerLabel,
    drawerIcon: ({ color, size }: NavigationIconProps) => (
      <DrawerItemIcon routeName={route.name} color={color} size={size} />
    ),
    sceneStyle: styles.scene,
  };
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={COLORS.white}
        />
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={getDrawerScreenOptions}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About App" component={AboutAppScreen} />
            <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.blue,
  },
  drawerButton: {
    marginLeft: 12,
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerButtonPressed: {
    backgroundColor: COLORS.white,
  },
  drawerButtonLine: {
    width: 18,
    height: 2,
    marginVertical: 2,
    borderRadius: 999,
    backgroundColor: COLORS.blue,
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  scene: {
    backgroundColor: COLORS.white,
  },
});

export default App;
