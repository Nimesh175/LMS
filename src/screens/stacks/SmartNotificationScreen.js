import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView , Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import TopNavigationBar from '../../components/TopNavigationBar';
import { ScrollView } from 'react-native';


const phoneIcon = <Icon name="phone-alt" size={20} color="#000" />;
const personOneIcon = <Icon name="user-graduate" size={20} color={colors.red} />;
const personTwoIcon = <Icon name="user-graduate" size={20} color={colors.blue} />;



// button
const ToggleButton = () => {
     const [toggle, setToggle] = useState(false);

     return (
         
               <Switch
               trackColor={{false: colors.midGray, true: colors.primary}}
               thumbColor="white"
               ios_backgroundColor={ colors.primary}
               onValueChange={(value) => setToggle(value)}
               value={toggle}
               />
          
          );
}

// list 
const ListItem =({ id ,title=""}) => {
     return (
          <View id={id}> 
          <View style={{width : '100%' , paddingVertical : dimensions.paddingLevel1, backgroundColor : colors.white , flexDirection : 'row' , borderRadius : 8, paddingHorizontal : dimensions.paddingLevel1 }}>  
              
               <View style={{width : "80%" , justifyContent : 'center'}}>
                    <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontSmallPlus }}
                    >{'\u2022'} {title}</Text>
               </View>

               <View style={{width : "20%" , justifyContent : 'center'}}>
                    <ToggleButton />
               </View>
          </View>
          <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.2 }} />
          </View>
     )
}


// main
const SmartNotificationScreen = () => {
     return (
          <>
               {/* send to stack router action > using onPress */}
               <TopNavigationBar name={"Smart Notification"} />



               <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
               <View style={styles.container}>
                <ListItem id={0}  title={" Enable Notification reminder for lessons 1"} />
                <ListItem id={1}  title={" Enable Notification reminder for lessons 2"}  />
                <ListItem id={2}  title={" Enable Notification reminder for lessons 3"} />

                </View>

          </>
     )
}

const styles = StyleSheet.create({
     container : { borderRadius : 20 ,paddingHorizontal : dimensions.paddingLevel2 * 1.3 , paddingVertical :dimensions.paddingLevel2   , 
                     width : dimensions.widthLevel1, alignSelf : 'center', height : dimensions.heightLevel10 * 2.4 },


                 

});

export default SmartNotificationScreen
