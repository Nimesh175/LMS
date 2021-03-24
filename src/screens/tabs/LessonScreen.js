import React , {useEffect , useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import Icon from 'react-native-vector-icons/FontAwesome';
import HamIconWithBar from '../../components/HamIconWithBar';
import DropDownPicker from 'react-native-dropdown-picker';

const e11 = require("../../assets/images/e11.webp")
const e12 = require("../../assets/images/e12.webp")
const upload1 = require("../../assets/images/upload1.webp")
const rightArrow = require("../../assets/images/rightArrow.webp")




const CardItem =({id , mainLetter="" ,subject="" , chapterCount=""}) => {

     const colorArr = [colors.primary, colors.cpink, colors.cblue,  colors.cgold, colors.cred];
     const bgColorArr = [colors.bgLightGreen, colors.bgLightPink, colors.bgLightBlue,  colors.bgLightYellow, colors.bgLightRed];
     

     let textColor = null;
     let bgColor = null;
     
     if (id % 5 == 0) {
               textColor = colorArr[0]
               bgColor = bgColorArr[0]
     } else if (id % 5 === 1) {
               textColor = colorArr[1]
               bgColor = bgColorArr[1]
     } else if (id % 5 ==2) {
                textColor = colorArr[2]
                bgColor = bgColorArr[2]
     } else if (id % 5 == 3) {
               textColor = colorArr[3]
               bgColor = bgColorArr[3]
     } else if (id % 5 == 4) {
          textColor = colorArr[4]
          bgColor = bgColorArr[4]
     }


     return (
          <>
               <TouchableOpacity style={styles.cardItemContainer}>
                    <View style={{borderColor : 'black' , borderRadius : 100 , width : dimensions.widthLevel3 * 0.1 , height : dimensions.widthLevel3 * 0.1 , backgroundColor : bgColor , justifyContent : 'center' , alignItems : 'center'}}>
                         <Text style={[styles.mainLetter ,{color : textColor}]}>{mainLetter}</Text>
                    </View>
                    <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.4}} />  
                    <Text style={{textAlign : "center" , fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMedium}}>{subject}</Text>
                    <Text style={{textAlign : "center" , fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontSmall , color : 'rgba(0,0,0,0.5)'}}>{chapterCount} Cahpters</Text>

               </TouchableOpacity>
              
          </>
     )
}




// main
 const LessonScreen = () => {
   
    
   

     return (
          <>
               <HamIconWithBar />

               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5}} />
               {/* main Container */}
               <View style={styles.mainContainer}>
                    <Text style={styles.lessonsText}>Lessons</Text>
                     <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />  
                       {/* middle Container */}
                       <View style={styles.middleContainer}>  
                       {/* middlicontainer >> add fixed hight Temporary */}
                            <ScrollView>
                                   {/* row */}
                                   <View style={styles.row}>
                                        <CardItem id={0} mainLetter="G" subject={"Geography"} chapterCount={4}/>
                                        <CardItem id={1} mainLetter={"M"} subject={"Mathamatics"} chapterCount={3}/>
                                        <CardItem id={2} mainLetter={"E"} subject={"English"} chapterCount={5}/>
                                   </View>

                                   {/* row */}
                                   <View style={styles.row}>
                                        <CardItem id={3} mainLetter={"C"} subject={"Chemistry"} chapterCount={9}/>
                                        <CardItem id={4} mainLetter={"A"} subject={"Art"} chapterCount={1}/>
                                        <CardItem id={5} mainLetter={"S"} subject={"Sinhalese"} chapterCount={6}/>
                                   </View>

                                   {/* row */}
                                   <View style={styles.row}>
                                        <CardItem id={6} mainLetter={"G"} subject={"Geography"} chapterCount={7}/>
                                        <CardItem id={7} mainLetter={"M"} subject={"Mathamatics"} chapterCount={11}/>
                                        <CardItem id={8} mainLetter={"C"} subject={"Chemistry"} chapterCount={9}/>
                                   </View>

                                   


                            </ScrollView>
                       </View>

                   

               </View>

          </>
     )
}

const styles = StyleSheet.create({
     mainContainer: {  paddingHorizontal : dimensions.paddingLevel4 },
     lessonsText: { fontFamily: fontFamilies.PoppinsMedium, fontSize: fontSizes.fontLarge * 1.05 }, 
     middleContainer : {width : "100%", paddingVertical : dimensions.paddingLevel1 , height : dimensions.heightLevel10 * 3.3},
     row : {flexDirection : 'row' , width : "100%" , paddingHorizontal : dimensions.paddingLevel1 ,paddingVertical : dimensions.paddingLevel1 , justifyContent : 'space-between' },
     cardItemContainer : {width : dimensions.widthLevel1 * 0.27 , height : dimensions.widthLevel1 * 0.27, backgroundColor : colors.white , borderRadius : 10 , justifyContent : 'center', alignItems : 'center'},

     mainLetter : {fontFamily : fontFamilies.PoppinsSemiBold ,fontSize : fontSizes.fontXXLarge},
});

export default LessonScreen