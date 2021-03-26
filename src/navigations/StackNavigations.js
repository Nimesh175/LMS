import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
 


import LoginScreen  from '../screens/stacks/LoginScreen';
import  SignUpScreen  from '../screens/stacks/SignUpScreen';
import ResetPasswordScreen  from '../screens/stacks/ResetPasswordScreen';
import  ForgotPasswordScreen  from '../screens/stacks/ForgotPasswordScreen';
import  HomeScreen  from '../screens/tabs/HomeScreen';
import ViewMarksScreen from '../screens/tabs/ViewMarksScreen';
import LessonScreen from '../screens/tabs/LessonScreen';
import PrivacyScreen from '../screens/stacks/PrivacyScreen';
import SupportScreen from '../screens/stacks/SupportScreen';
import SmartNotificationScreen from '../screens/stacks/SmartNotificationScreen';
import ProfileScreen from '../screens/drawer/ProfileScreen';
import SettingScreen from '../screens/drawer/SettingScreen';
import LessonSubScreen from '../screens/tabs/LessonSubScreen';
import OnlineLessonScreen from '../screens/tabs/OnlineLessonScreen';
import ManageMaterialScreen from '../screens/stacks/ManageMaterialScreen';


const StackNavigations = () => (
    <Router>
        <Stack key="rootStacks">   
          <Scene key="loginScreen" component={LoginScreen} hideNavBar={true}  initial={true}   /> 
          <Scene key="signUpScreen" component={SignUpScreen} hideNavBar={true}    /> 
          <Scene key="resetPasswordScreen" component={ResetPasswordScreen} hideNavBar={true}    /> 
          <Scene key="forgotPasswordScreen" component={ForgotPasswordScreen} hideNavBar={true}    /> 
          <Scene key="homeScreen" component={HomeScreen} hideNavBar={true}    /> 
          <Scene key="viewMarksScreen" component={ViewMarksScreen} hideNavBar={true}    /> 
          <Scene key="lessonScreen" component={LessonScreen} hideNavBar={true}    /> 
          <Scene key="privacyScreen" component={PrivacyScreen} hideNavBar={true}    /> 
          <Scene key="supportScreen" component={SupportScreen} hideNavBar={true}    /> 
          <Scene key="smartNotificationScreen" component={SmartNotificationScreen} hideNavBar={true}    /> 
          <Scene key="profileScreen" component={ProfileScreen} hideNavBar={true}    /> 
          <Scene key="settingScreen" component={SettingScreen} hideNavBar={true}    /> 
          <Scene key="lessonSubScreen" component={LessonSubScreen} hideNavBar={true}    /> 
          <Scene key="onlineLessonScreen" component={OnlineLessonScreen} hideNavBar={true}    /> 
          <Scene key="manageMaterialScreen" component={ManageMaterialScreen} hideNavBar={true}    />   
        </Stack>
    </Router>
);

export default StackNavigations
