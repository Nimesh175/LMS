import React from 'react';
import {Router, Scene, Tabs} from 'react-native-router-flux';
import BottomTabBar from './BottomTabBar';
import  HomeScreen  from '../screens/tabs/HomeScreen';
import ViewMarksScreen from '../screens/tabs/ViewMarksScreen';
import LessonScreen from '../screens/tabs/LessonScreen';
import OnlineLessonScreen from '../screens/tabs/OnlineLessonScreen';

export const tabImages = [
    {active: require('../assets/images/home.webp'),inactive: require('../assets/images/homeH.webp')},
    {active: require('../assets/images/view.webp'),inactive: require('../assets/images/viewH.webp')},
    {active: require('../assets/images/book.webp'),inactive: require('../assets/images/bookH.webp')},
    {active: require('../assets/images/onlineClass.webp'),inactive: require('../assets/images/onlineClassH.webp')}
]

const TabNavigations = () => (
    <Router>
        <Tabs key="rootTabs" tabBarComponent={BottomTabBar} tabBarPosition='bottom'>
            <Scene key="Home" component={HomeScreen} hideNavBar={true} initial={true} />
            <Scene key="View Marks" component={ViewMarksScreen} hideNavBar={true} />
            <Scene key="Lessons" component={LessonScreen}  hideNavBar={true} />
            <Scene key="Online Class" component={OnlineLessonScreen}  hideNavBar={true} />
        </Tabs>
    </Router>
);

export default TabNavigations;
