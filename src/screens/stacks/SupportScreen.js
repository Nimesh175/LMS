import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
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

const TitleAndPharagraph = ({title="" , description=""}) => {
     return (
          <>
               <Text style={{fontFamily : fontFamilies.PoppinsMedium, fontSize : fontSizes.fontLarge}}>{title}</Text>
               <Text style={{fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontMedium, color : 'rgba(0,0,0,0.7)'}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .
               </Text>
               <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
          </>
     )
}



const ContactListItem = ({id=1 , telephoneNumber=""}) => {

     let bgColor = null;
     let textColor = null;

     if(id== 1) {
          bgColor = colors.bgLightRed
          textColor = colors.red
     }else if(id==2) {
          bgColor = colors.bgLightBlue
          textColor = colors.blue
     }

     const personIcon = <Icon name="user-graduate" size={20} color={textColor} />;


     return (
          <>
               <View style={styles.cardItemListContainer}>

                    <View style={{flexDirection : 'row'}}>
                         <View style={{width : "20%" , alignItems : 'center' , justifyContent : 'center' }}>
                              <View style={{borderRadius : 100 , borderWidth : 1 , borderColor : textColor ,padding : 5 , backgroundColor : bgColor}}>
                                   <Text>{personIcon}</Text>
                              </View>
                         </View>

                         <View style={{width : "60%" , justifyContent : 'center' }}>
                              <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMedium}}>{telephoneNumber}</Text>
                         </View>

                         <TouchableOpacity style={{width : "20%" , alignItems : 'center' , justifyContent : 'center'}}>
                              <Text>{phoneIcon}</Text>
                         </TouchableOpacity>
                    </View>
               </View>
               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.7}} />
          </>
     )
}



// main
const SupportScreen = () => {
     return (
          <>
               {/* send to stack router action > using onPress */}
               <TopNavigationBar name={"Support"} />



               <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
               <View style={styles.container}>
                  <ScrollView style={{paddingRight : dimensions.paddingLevel2}} >
                  <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                      {/* add pharagraph & title here */}
                       <TitleAndPharagraph title={"Support Note"} description={""} />

                       <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                  </ScrollView>
               </View>
        
          {/* Last section */}
                <View style={styles.container2}>
                <Text style={{fontFamily : fontFamilies.PoppinsMedium, fontSize : fontSizes.fontLarge}}>Contact Us</Text>
                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                    <ContactListItem id={1} telephoneNumber="+94 0987 678 6" />
                    <ContactListItem id={2} telephoneNumber="+94 0787 778 8" />

                </View>

          </>
     )
}

const styles = StyleSheet.create({
     container : { borderRadius : 20 ,paddingLeft : dimensions.paddingLevel2 * 1.3 , paddingVertical :dimensions.paddingLevel2   , 
                     width : dimensions.widthLevel1, alignSelf : 'center', backgroundColor : colors.white , height : dimensions.heightLevel10 * 2.4 },

     container2 : { paddingHorizontal : dimensions.paddingLevel2 * 1.3 , paddingVertical :dimensions.paddingLevel2   , width : dimensions.widthLevel1, alignSelf : 'center'  },

     cardItemListContainer : { width : '100%' , paddingVertical : dimensions.paddingLevel1, backgroundColor : colors.white , borderRadius : 10},
});

export default SupportScreen
