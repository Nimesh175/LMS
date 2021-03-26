// import 'react-native-gesture-handler';
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from '../screens/drawer/ProfileScreen';
import SettingScreen from '../screens/drawer/SettingScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="drawerProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="drawerSettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;