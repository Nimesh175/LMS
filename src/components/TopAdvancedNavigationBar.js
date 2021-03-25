import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView , Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../configurations/constants';
import EmptyView from './EmptyView'
import TextField from './TextField';
import ListButton from './ListButton';


const submit = <Icon name="check-circle" size={13} color={colors.primary} />;
const download = <Icon name="arrow-alt-circle-down" size={13} color={colors.red} />;

const TopAdvancedNavigationBar = ({name="" , action={}}) => {
     return (
          <>
               <View style={styles.container}>
                    <TouchableOpacity style={{width : '8%'  }}  onPress={action}>
                    <Image source={require('../assets/images/rightArrow1.webp')} style={styles.arrowImg} />
                    </TouchableOpacity>

                    <View style={{width : '44%' ,  alignItems : 'center' , justifyContent : 'center' }}>
                         <Text style={styles.headerText}>{name}</Text>
                    </View>

                    <View style={{width : '48%' ,  alignItems : 'center' , justifyContent : 'center' , flexDirection : 'row'}}>
                       <TouchableOpacity  style={[styles.button , {backgroundColor : colors.bgLightRed , borderColor : colors.red}]}>
                            <Text style={[styles.buttonText , {color : colors.red}]}>{download} Download</Text>
                       </TouchableOpacity>

                       <TouchableOpacity  style={[styles.button , {backgroundColor : colors.bgLightGreen , borderColor : colors.midGreen , justifyContent :'center', alignItems : 'center'}]}>
                            <Text style={[styles.buttonText , {color : colors.midGreen}]}>{submit}  Submit  </Text>
                       </TouchableOpacity>
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
     headerText : {fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium ,},
     buttonText : {fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontSmallPlus , justifyContent: 'center', alignItems : 'center'},
     button : { paddingHorizontal : dimensions.paddingLevel1 , paddingVertical : dimensions.paddingLevel1 * 0.5 ,borderWidth : 1, borderRadius : 5 , marginLeft : 5},
});

export default TopAdvancedNavigationBar
