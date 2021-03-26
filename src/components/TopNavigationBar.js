import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../configurations/constants';
import EmptyView from './EmptyView'
import TextField from './TextField';
import ListButton from './/ListButton';
import { Actions } from 'react-native-router-flux';

const TopNavigationBar = ({name="" , action=null}) => {
 

     return (
          <>
               <View style={styles.container}>
                    <TouchableOpacity style={{width : '20%' }}  onPress={action}>
                    <Image source={require('../assets/images/rightArrow1.webp')} style={styles.arrowImg} />
                    </TouchableOpacity>

                    <View style={{width : '60%' ,  alignItems : 'center' , justifyContent : 'center'}}>
                         <Text style={styles.headerText}>{name}</Text>
                    </View>

               </View>
          </>
     )
}

const styles = StyleSheet.create({ 
     container : {width : dimensions.fullWidth , paddingVertical : dimensions.paddingLevel2 * 1.4 ,
             paddingHorizontal : dimensions.paddingLevel3 ,flexDirection : 'row' , alignItems : 'center' , backgroundColor : colors.white  , 
             borderBottomColor : 'rgba(0,0,0,0.1)' ,borderBottomWidth : 1  } ,
     arrowImg : {width : 25 , height : 25},
     headerText : {fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMediumPlus ,},
});

export default TopNavigationBar
