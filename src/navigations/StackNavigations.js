import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
 

import ManageAppScreen from '../screens/AdminManageAppScreen';


const StackNavigations = () => (
    <Router>
        <Stack key="rootStacks">   
          <Scene key="manageAppScreen" component={ManageAppScreen} hideNavBar={true}  initial={true}   /> 


        
        </Stack>
    </Router>
);

export default StackNavigations
