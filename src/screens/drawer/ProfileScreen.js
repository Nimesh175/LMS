import React , {useEffect , useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/FontAwesome';
import HamIconWithBar from '../../components/HamIconWithBar';



const e11 = require("../../assets/images/BG1.png")


const ListItem = ({title="" , detail=""}) => {
     return (
          <View style={styles.listContainer}>
                    <View style={{width : "45%", paddingHorizontal : dimensions.paddingLevel1 * 0.5 }}>
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium , color : 'rgba(0,0,0,0.5)', justifyContent : 'center'}}>
                         {title}</Text>
                    </View>


                    <View style={{width : "55%", paddingHorizontal : dimensions.paddingLevel1 * 0.5 , justifyContent : 'center'}}>
                          <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium ,textAlign : 'right'}}>
                          {detail}</Text>
                    </View>
          </View>
     )
}



// main
 const ProfileScreen = () => {
     return (
          <>
               <HamIconWithBar DP={null} isUseDrawer drawerHeadTitle="Profile" />


               {/* >>>> upperContainer Container */}  
                    <View style={styles.upperContainer}>
                        {/* image  and container */}
                        <View style={{height : '75%' , width : '100%' , justifyContent : 'center' , alignItems: 'center'}}>

                              
                                   <Image source={e11}  style={styles.bubleIMGbackground} />
                                   <Image source={e11}  style={styles.bubleIMGbackground2} />
                            

                              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                              <View style={styles.imgProfileWrapper}>
                                   <Image source={require("../../assets/images/men-1.png")} style={styles.imgProfile} />
                              </View>
                        </View>

                         {/* description */}
                        <View style={{ height : '25%' , justifyContent : 'center' , alignItems : 'center' , paddingBottom : dimensions.paddingLevel1 * 0.8 ,}}>
                              <Text style={{fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontLarge}}>Jorge rosero</Text>
                              <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.5)'}}>Class A</Text>
                        </View>
                    </View>



               {/* >>>>>lower Container */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel2 * 0.6 }} />
                    <View style={styles.lowerContainer}>
                        <ScrollView>
                         <ListItem title="Name" detail="John peter forsia" />
                              <ListItem title="Username" detail="John@1233" />
                              <ListItem title="Contact Number" detail="+890 8978 9900" />
                              <ListItem title="School" detail="OKI International School" />
                              <ListItem title="Garde" detail="12" />
                        </ScrollView>
                    </View>

               




          </>
     )
}

const styles = StyleSheet.create({
     mainContainer: {  paddingHorizontal : dimensions.paddingLevel4 , backgroundColor : 'yellow'},

     upperContainer : {width : dimensions.fullWidth , backgroundColor : 'white' , height : dimensions.heightLevel10 * 1.5 },

     bubleIMGbackground : {position : 'absolute'  , width : '25%' , height : '100%' , left : 0 , transform: [{rotate : '90deg'}] ,},
     bubleIMGbackground2 : {position : 'absolute'  , width : '25%' , height : '100%' , right : 0 , transform: [{rotate : '270deg'}] ,},

     imgProfileWrapper : {borderRadius : 100,borderWidth : 5, borderColor : 'rgba(0,0,0,0.1)', width : dimensions.widthLevel10 * 0.6 ,
                          height : dimensions.widthLevel10 * 0.6 , justifyContent : 'center' , alignItems : 'center' , alignSelf : 'center'},
    imgProfile : {width : "100%" , height : "100%" , borderRadius : 100},
     listContainer : {width : "100%", paddingHorizontal : dimensions.paddingLevel1 , paddingVertical : dimensions.paddingLevel1 , backgroundColor : colors.white ,marginBottom : 5 , flexDirection : 'row', borderRadius : 10},
    lowerContainer : {width : dimensions.widthLevel2 , paddingVertical : dimensions.paddingLevel2  , alignSelf : 'center'  ,borderRadius : 15 , height : dimensions.heightLevel10 * 2.45 },
});

export default ProfileScreen