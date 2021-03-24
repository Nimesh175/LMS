import React , {useEffect , useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/FontAwesome';
import HamIconWithBar from '../../components/HamIconWithBar';

const e11 = require("../../assets/images/e11.webp")
const e12 = require("../../assets/images/e12.webp")
const upload1 = require("../../assets/images/upload1.webp")
const rightArrow = require("../../assets/images/rightArrow.webp")

// today class card
const ClassCard = ({ id = 0, time = "", date = "", subject = "" }) => {
     const colorArr = [colors.primary, colors.cpink, colors.cblue,  colors.cgold, colors.cred]
     let bgColor = null;
     
     if (id % 5 == 0) {
               bgColor = colorArr[0]
     } else if (id % 5 === 1) {
               bgColor = colorArr[1]
     } else if (id % 5 ==2) {
                bgColor = colorArr[2]
     } else if (id % 5 == 3) {
               bgColor = colorArr[3]
     } else if (id % 5 == 4) {
          bgColor = colorArr[4]
     }
       
     return (
          
               <View style={[styles.cardWrapper , {backgroundColor : bgColor}]}>
               <Image source={e11} style={{position : "absolute" , top : -15, left : 40, transform : [{scale : 1.5}]}} />
               <Image source={e12} style={{position : "absolute" , bottom : -12, right : -2 , transform : [{scale : 1.3}]} } />


                     {/* section 1 container */}
                    <View  style={styles.section1}>
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
               
                    {/* section 2 container */}
                    <View  style={styles.section2}>
                              <Text style={{fontFamily : fontFamilies.PoppinsLight , fontSize: fontSizes.fontMedium ,color : 'rgba(255,255,255,0.8)'}}>10.00 AM</Text>
                              <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize: fontSizes.fontMidMedium , color : colors.white}}>Mathematics II</Text>
                    </View>
               </View>
          
     )
}


// last Seen class cards

const OldClassCard = ({id=0  }) => {

     const colorArr = [colors.primary, colors.cpink, colors.cblue,  colors.cgold, colors.cred]
     let bgColor = null;
     
     if (id % 5 == 0) {
               bgColor = colorArr[0]
     } else if (id % 5 === 1) {
               bgColor = colorArr[1]
     } else if (id % 5 ==2) {
                bgColor = colorArr[2]
     } else if (id % 5 == 3) {
               bgColor = colorArr[3]
     } else if (id % 5 == 4) {
          bgColor = colorArr[4]
     }

     return (
           <View style={[styles.oldCardWrapper , {backgroundColor : colors.white}]}>
               <Image source={e11} style={{position : "absolute" , top : -15, left : 40, transform : [{scale : 1.5}]}} />
               <Image source={e12} style={{position : "absolute" , bottom : -12, right : -2 , transform : [{scale : 1.3}]} } />


                    <View>
                    <Image source= {require("../../assets/images/men-1.png") } style={styles.imgOldSubject} />
                    </View>
                      <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                      <View style={{height : dimensions.heightLevel3 * 1.8 , width : "100%"}}>
                         <ScrollView>
                         <Text style={styles.oldcardMainText}>Biology theory part II </Text>
                         </ScrollView>
                      </View>

                      <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                      <View style={{flexDirection : 'row'  ,width : '100%', justifyContent : 'space-between'}}>
                           <Text style={styles.oldCardFooterText} >01/01/2021</Text>
                           <Text style={styles.oldCardFooterText}> 10 Minutes</Text>
                      </View>
               
               </View>
     )
}

// main
 const HomeScreen = () => {
     return (
          <>
               <HamIconWithBar />

               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5}} />
               {/* main Container */}
               <View style={styles.mainContainer}>
                    <Text style={styles.howManyClassesText}>You have 3 classes today</Text>

                     <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />
                    {/* scroll horizontal card container */}
                    <View style={styles.cardContainer}>
                         <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                              <ClassCard  id={0} />
                              <ClassCard  id={1} />
                              <ClassCard  id={2} />
                              <ClassCard  id={3} />
                              <ClassCard  id={4} />
                              <ClassCard  id={5} />
                         </ScrollView>
                    </View>

                    {/* Last Seen Class [OLD] */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                    <View style={{flexDirection : 'row' , width : '100%'}}>
                          <Text style={styles.lastSeenText}>Last Seen Lessons</Text>
                          <TouchableOpacity style={{ position : 'absolute' , right : 0, alignSelf : 'center' , paddingRight : 10}}>
                              <Text style={styles.viewAllText}>View All</Text>
                          </TouchableOpacity>
                    </View>

                    <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                      <View style={styles.oldCardContainer}>
                         <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
                              <OldClassCard  id={0} />
                              <OldClassCard  id={1} />
                              <OldClassCard  id={2} />
                              <OldClassCard  id={3} />
                              <OldClassCard  id={4} />
                              <OldClassCard  id={5} />
                         </ScrollView>
                    </View>

                    {/* last manage material */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                    <TouchableOpacity style={styles.manageMaterialContainer}>
                         {/* image */}
                         <View style={{padding : dimensions.heightLevel1 , backgroundColor : colors.white , borderRadius : 15}}>
                               <Image source={upload1} style={{width : 25 , height : 25}} />
                         </View>

                        <View style={{justifyContent : 'center' , paddingLeft : dimensions.paddingLevel1}}>
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium}}>Manage materials</Text>
                        </View>

                         <View style={{alignSelf : 'center' , position : 'absolute' , right : 25}}>
                         <Image source={rightArrow} style={{width : 25 , height : 25}} />
                         </View>
                    </TouchableOpacity>

               </View>




          </>
     )
}

const styles = StyleSheet.create({
     mainContainer: {  paddingHorizontal : dimensions.paddingLevel4 },
     howManyClassesText: { fontFamily: fontFamilies.PoppinsMedium, fontSize: fontSizes.fontLarge * 1.05 }, 
     cardContainer : {height : dimensions.heightLevel10 , paddingRight : 5, paddingLeft :0, flexDirection : 'row' , alignItems : 'center', borderRadius : 10},
     
     
     cardWrapper :{ width: dimensions.widthLevel9, height: dimensions.heightLevel8, marginHorizontal: 8, borderRadius: 10, flexDirection: 'row' },
     section1 : {width : "40%", height : '100%' , backgroundColor : 'rgba(255,255,255,0)' , justifyContent: 'center', alignItems : 'center'},
     cardImg1: { width: dimensions.heightLevel5, backgroundColor: 'rgba(255,255,255,0.4)', height:  dimensions.heightLevel5, borderRadius: 5 , transform : [{rotate : '15deg'}] },
     cardImg2: { width: dimensions.heightLevel5, backgroundColor: 'rgba(255,255,255,0.8)', height:  dimensions.heightLevel5, borderRadius: 5 , position : 'absolute' , justifyContent: 'center', alignItems :'center' },
     
     section2: { width: "60%", height: '100%', justifyContent: 'center', alignItems: 'flex-start' , padding : dimensions.paddingLevel1 * 0.7 },
     
     
     oldCardContainer : {height : dimensions.heightLevel10 * 1.3 , paddingRight : 5, paddingLeft :0, flexDirection : 'row' , alignItems : 'center', borderRadius : 10 },
     oldCardWrapper: { width: dimensions.widthLevel11 * 0.9, height: dimensions.heightLevel10 * 1.2, marginHorizontal: 8, borderRadius: 10, paddingVertical : dimensions.paddingLevel2 , paddingHorizontal :  dimensions.paddingLevel3  },
     lastSeenText: { fontFamily: fontFamilies.PoppinsMedium, fontSize: fontSizes.fontLarge * 1.05 }, 
     viewAllText: { fontFamily: fontFamilies.PoppinsRegular, fontSize: fontSizes.fontMidMedium ,color : colors.blue,}, 
     imgOldSubject : {width : dimensions.heightLevel1 * 2.7 , height :dimensions.heightLevel1 * 2.7 , borderRadius : 100  },
     oldcardMainText : {fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontMidMedium},
     oldCardFooterText : { fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontSmallPlus , color : 'rgba(0,0,0,0.6)'},


     manageMaterialContainer : {width : "100%" , backgroundColor : '#E0EBEB' , flexDirection : 'row' , padding : dimensions.paddingLevel1 * 0.7 , borderRadius : 10},
});

export default HomeScreen