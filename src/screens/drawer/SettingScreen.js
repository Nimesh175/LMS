import React , {useEffect , useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import HamIconWithBar from '../../components/HamIconWithBar';



const e11 = require("../../assets/images/BG1.png")
const editIcon = <Icon name="edit" size={30} color={colors.primary} />;

const belltIcon = <Icon name="bell" size={16} color={colors.primary} />;
const privacyIcon = <Icon2 name="user-shield" size={15} color={colors.primary} />;
const supportIcon = <Icon2 name="user-cog" size={15} color={colors.primary} />;

const ListItem = ({icon , title=""}) => {
     return (
          <>
               <TouchableOpacity style={styles.listContainer}>
                    <View style={{width : "20%" ,justifyContent : 'center' , alignItems : 'center'}}>
                         <View style={styles.listIconContainer}>
                              {icon}
                         </View>
                    </View>


                    <View style={{width : "80%", paddingHorizontal : dimensions.paddingLevel1 * 0.5 , justifyContent : 'center' , alignItems : 'flex-start'}}>
                          <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium ,textAlign : 'right'}}>
                          {title}</Text>
                    </View>
               </TouchableOpacity>
               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.3 }} />
          </>
     )
}



// main
 const SettingScreen = () => {
     return (
          <>
               <HamIconWithBar DP={null} isUseDrawer drawerHeadTitle="Settings" />


               {/* main Container */}
               <View style={styles.mainContainer}>
                   

                    <View style={styles.upperContainer}>
                         {/* image container */}
                         <View style={{width : "20%" , justifyContent : 'center', alignItems : 'center'}}>
                              <Image  source={require("../../assets/images/men-1.png")} style={styles.profileImg} />
                         </View>

                         {/* detail container */}
                         <View style={{width : "55%" , justifyContent : 'center'}}>
                              <Text style={{fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontLarge}}>Jorge rosero</Text>
                              <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.5)'}}>+94 78 908 789 9</Text>
                         </View>

                         {/* edit button */}
                         <View style={{width : "25%" ,  justifyContent : 'center', alignItems : 'center'}}>
                              <TouchableOpacity style={{padding : dimensions.paddingLevel1}}>
                                   {editIcon}
                              </TouchableOpacity>
                         </View>
                    </View>


                      {/* General Settings       */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                    <Text style={styles.generalSettingText}>General Settings</Text>

                     {/* >>> list container */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel2 * 0.8 }} />
                    <View style={styles._listItemsContainer}>
                         <ListItem  icon={belltIcon} title={"Smart Notification"} />
                         <ListItem  icon={privacyIcon} title={"Privacy & Seurity"} />
                         <ListItem  icon={supportIcon} title={"Support"} />
                    </View>

               </View>

              

               




          </>
     )
}

const styles = StyleSheet.create({
     mainContainer: { width : dimensions.widthLevel1 , paddingHorizontal : dimensions.paddingLevel1 ,  alignSelf : "center" },
     upperContainer : {flexDirection : 'row' , width : '100%', paddingVertical : dimensions.paddingLevel1 ,backgroundColor : colors.white ,borderRadius : 10},
     profileImg : {width : dimensions.widthLevel10 * 0.25 , height : dimensions.widthLevel10 * 0.25 , borderRadius : 100 },
     generalSettingText: { fontFamily: fontFamilies.PoppinsMedium, fontSize: fontSizes.fontLarge * 1.05 , marginLeft : dimensions.paddingLevel1 * 0.5}, 
     _listItemsContainer : {width : "100%" },

     listContainer : {width : "100%" , backgroundColor : colors.white , paddingVertical : dimensions.paddingLevel1 * 0.8 , flexDirection : 'row' , borderRadius : 10},
     listIconContainer : {borderColor : colors.primary , borderRadius : 100 , borderWidth : 1 ,backgroundColor : colors.bgLightGreen, 
               width : dimensions.widthLevel10 * 0.15 , height : dimensions.widthLevel10 * 0.15 , justifyContent : "center" , alignItems : 'center'},

               
});

export default SettingScreen