import 'react-native-gesture-handler';
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from '../screens/LoginScreen'
import ResetPasswordScreen from '../screens/ResetPasswordScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;