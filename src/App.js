import 'react-native-gesture-handler';


import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { colors, basicStyles } from './configurations/constants';


import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store/store";
import StackNavigations from './navigations/StackNavigations';
import TabNavigations from './navigations/TabNavigations';
// import DrawerNavigator from './navigations/DrawerNavigator';

const App= () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
 

  return (
    <>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar backgroundColor={colors.primary} />
            <SafeAreaView style={[basicStyles.miniFlexWrapper , {backgroundColor : '#F6F6F6'} ]}>
                <StackNavigations />
                {/* <TabNavigations /> */}
                {/* <DrawerNavigator /> */}
            </SafeAreaView>
          </PersistGate>
        </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
