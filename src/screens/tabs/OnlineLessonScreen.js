import React , {useEffect , useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/FontAwesome5';
import HamIconWithBar from '../../components/HamIconWithBar';
import DropDownPicker from 'react-native-dropdown-picker';


const videoIcon = <Icon name="video" size={20} color="#fff" />;
const leftArrow = <Icon name="chevron-left" size={30} color="#7F7F7F" />;
const rightArrow = <Icon name="chevron-right" size={30} color="#7F7F7F" />;



const DateCard = ({id  }) => {

     




     return(
          <View id={id}  style={{marginRight : 8}}>
               <View style={{paddingHorizontal : dimensions.paddingLevel2 * 1.7, paddingVertical : dimensions.paddingLevel1, backgroundColor : "rgba(255,255,255,0.4)", borderRadius : 10, justifyContent : 'center', alignItems :'center'}}>
                    <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontMidMedium }}>Thu</Text>
                    <Text style={{fontFamily : fontFamilies.PoppinsSemiBold, fontSize : fontSizes.fontXLarge }}>10</Text>
               </View>
               
          </View>
     )
}



const ShaduleCard = ({id }) => {
     return (
         <View id={id}>
               <View  style={styles._CardContainer}> 
               {/* icon with date */}
                    <View style={{width : "20%" , justifyContent : 'center' , alignItems : 'center'}}>
                              <View style={styles.cardImg1}></View>
                              <View style={styles.cardImg2}>
                                   <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontLarge }}
                                   >
                                   11</Text>
                                   <Text style={{fontFamily : fontFamilies.PoppinsLight, fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.6)' }}
                                   >
                                   Jan</Text>
                              </View>
                    </View>


                    {/* shadule details */}
                    <View style={{width : "60%" , justifyContent : 'center', padding : dimensions.paddingLevel1 }}>
                         <Text style={{fontFamily : fontFamilies.PoppinsLight, fontSize : fontSizes.fontMedium, color: 'rgba(0,0,0,0.7)'}}>12.00 AM - 2.00PM</Text>
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontMidMedium,}}>Mathamatics II </Text>
                    </View>


                    <View style={{width : "20%" ,justifyContent : 'center' , alignItems : 'center'}}>
                              <TouchableOpacity style={{borderWidth : 1, borderRadius : 100 , borderColor : "#2196F3" , padding : 7 , backgroundColor : '#2196F3'}} >
                              {videoIcon}
                              </TouchableOpacity>
                    </View>
               </View>
               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />
         </View>
     )
}



const OnlineLessonScreen = () => {
     return (
          <View style={styles.mainContainer}>
                <EmptyView style={{ marginTop: dimensions.heightLevel2}} />
                <Text style={{fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontXXLarge}}>Online Lessons</Text>
                <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium , color :"rgba(0,0,0,0.5)"}}>School name here - Grade 12 School name hereSchool name here</Text>


                <EmptyView style={{ marginTop: dimensions.heightLevel2}} />
                <View>
                    {/* calender container */}
                    {/* calender container */}
                    {/* [SECTION 01] */}
                         <View style={{width : "100%" , backgroundColor : colors.white , paddingVertical : dimensions.paddingLevel1 ,flexDirection : 'row' , borderRadius : 10}}>
                             {/* date */}
                              <View style={{width : '70%'}}>
                                   <Text style={{fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontXLarge}}>Jan, 2021</Text>
                              </View>
                              {/* arrow button */}
                              <View style={{width : '30%' ,flexDirection : 'row' , justifyContent : 'center' }}>
                                   {/* left */}
                                   <TouchableOpacity>
                                        <Text>{leftArrow}</Text>
                                   </TouchableOpacity>

                                   <EmptyView style={{ marginRight: dimensions.heightLevel2 }} />

                                   {/* right */}
                                   <TouchableOpacity>
                                        <Text>{rightArrow}</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    {/* [SECTION 02] */}
                    <View style={{width : "100%" ,  paddingVertical : dimensions.paddingLevel1, paddingHorizontal : dimensions.paddingLevel1}}>
                         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                   <DateCard  id={0} />
                                   <DateCard  id={1} />
                                   <DateCard  id={2} />
                                   <DateCard  id={3} />
                                   <DateCard  id={4} />
                                   <DateCard  id={5} />
                                   <DateCard  id={6} />
                                   <DateCard  id={7} />
                         </ScrollView>
                    </View>


                    {/* calender container */}
                    {/* calender container */}
                </View>
                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

               <View style={styles.sheduleCardContainer}>
                    <ScrollView style={{paddingRight : 10}}>
                         <ShaduleCard id={0} />
                         <ShaduleCard id={0} />
                         <ShaduleCard id={0} />
                         <ShaduleCard id={0} />
                         <ShaduleCard id={0} />
                         {/* add props like >> subject , date , time gaps... */}
                    </ScrollView>
               </View>


          </View>
     )
}

const styles = StyleSheet.create({
     mainContainer : { width : dimensions.fullWidth , paddingHorizontal : dimensions.paddingLevel3 , paddingVertical : dimensions.paddingLevel1 },
     sheduleCardContainer : {width : "100%" , paddingVertical : dimensions.paddingLevel1,  height : dimensions.heightLevel10 * 2.75 , borderRadius : 5},
     _CardContainer : {width : "100%" , paddingVertical : dimensions.paddingLevel2, backgroundColor : colors.white, flexDirection :'row', borderRadius : 10 },

     cardImg1: { width: dimensions.heightLevel5, backgroundColor: 'rgba(166,166,166,0.5)', height:  dimensions.heightLevel5, borderRadius: 5 , transform : [{rotate : '15deg'}] },
     cardImg2: { width: dimensions.heightLevel5, backgroundColor: 'rgba(166,166,166,0.5)', height:  dimensions.heightLevel5, borderRadius: 5 , position : 'absolute' , justifyContent: 'center', alignItems :'center' },
});

export default OnlineLessonScreen
