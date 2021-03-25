
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { colors, basicStyles } from './configurations/constants';
import { LoginScreen } from './screens/stacks/LoginScreen';
import { SignUpScreen } from './screens/stacks/SignUpScreen';
import { ResetPasswordScreen } from './screens/stacks/ResetPasswordScreen';
import { ForgotPasswordScreen } from './screens/stacks/ForgotPasswordScreen';
import  HomeScreen  from './screens/tabs/HomeScreen';
import ViewMarksScreen from './screens/tabs/ViewMarksScreen';
import LessonScreen from './screens/tabs/LessonScreen';
import PrivacyScreen from './screens/stacks/PrivacyScreen';
import SupportScreen from './screens/stacks/SupportScreen';
import SmartNotificationScreen from './screens/stacks/SmartNotificationScreen';
import ProfileScreen from './screens/drawer/ProfileScreen';
import SettingScreen from './screens/drawer/SettingScreen';
import LessonSubScreen from './screens/tabs/LessonSubScreen';


const App= () => {
 

  return (
     <View style={{flex: 1}}> 
          <StatusBar backgroundColor={colors.primary} />
            <SafeAreaView style={[basicStyles.miniFlexWrapper , {backgroundColor : '#F6F6F6'} ]}> 
              

                <LoginScreen />
                {/* <SignUpScreen /> */}
                {/* <ResetPasswordScreen /> */}
                {/* <ForgotPasswordScreen /> */}
                {/* <HomeScreen /> */}
                {/* <ViewMarksScreen /> */}
                {/* <LessonScreen /> */}

                {/* <PrivacyScreen /> */}
                {/* <SupportScreen /> */}
                {/* <SmartNotificationScreen /> */}

                {/* <ProfileScreen /> */}
                {/* <SettingScreen /> */}

                {/* <LessonSubScreen /> */}
                
      

            </SafeAreaView>
        </View>

  );
};

const styles = StyleSheet.create({

});

export default App;
