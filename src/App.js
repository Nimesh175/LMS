
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
import { LoginScreen } from './screens/LoginScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { ResetPasswordScreen } from './screens/ResetPasswordScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';
import  HomeScreen  from './screens/tabs/HomeScreen';
import ViewMarksScreen from './screens/tabs/ViewMarksScreen';
import LessonScreen from './screens/tabs/LessonScreen';


const App= () => {
 

  return (
     <View style={{flex: 1}}> 
          <StatusBar backgroundColor={colors.primary} />
            <SafeAreaView style={[basicStyles.miniFlexWrapper , {backgroundColor : '#F6F6F6'} ]}> 
              

                {/* <LoginScreen /> */}
                {/* <SignUpScreen /> */}
                {/* <ResetPasswordScreen /> */}
                {/* <ForgotPasswordScreen /> */}
                {/* <HomeScreen /> */}
                {/* <ViewMarksScreen /> */}
                <LessonScreen />
                
      

            </SafeAreaView>
        </View>

  );
};

const styles = StyleSheet.create({

});

export default App;
