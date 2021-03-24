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




// last card / summary

const SummaryCard =({mainText="" , subText=""}) => {
     return(
          <>
                <View style={{width : dimensions.heightLevel6, height : dimensions.heightLevel6, backgroundColor : colors.white , borderRadius : 5 , justifyContent : 'center', alignItems : 'center' , marginRight : dimensions.paddingLevel1}}>
                    <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontXLarge, color: colors.primary}}>{mainText}</Text>
                    <Text  style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontSmall, color: "rgba(0,0,0,0.5)" , textAlign:"center"}}>{subText}</Text>
               </View>
          </>
     )
}



const CardItem =({id , mark=78 ,subject="", cardItemListLength=1}) => {

     // for styles only [START]
     const gradeArr =  [
                              {grade : 'A' , color : colors.brightGreen },
                              {grade : 'B' , color : colors.gradeBlue },
                              {grade : 'C' , color : colors.gradePink },
                              {grade : 'D' , color : colors.orange },
                              {grade : 'F' , color : colors.red } ];

     let _color= null
     let grade = null

     if(mark < 30) {
          _color = gradeArr[4].color
          grade = gradeArr[4].grade
     }else if(mark < 55) {
          _color = gradeArr[3].color
          grade = gradeArr[3].grade
     }else if(mark < 65) {
          _color = gradeArr[2].color
          grade = gradeArr[2].grade
     }else if(mark < 75) {
          _color = gradeArr[1].color
          grade = gradeArr[1].grade
     }else {
          _color = gradeArr[0].color
          grade = gradeArr[0].grade
     }
     
      // for styles only [END]     

     const result =  id == (cardItemListLength-1) ? false : true;

     return (
          <>
               <View style={[styles.listItem ,{borderBottomWidth :result ? 1 : null , borderBottomColor : result ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.0)"  } ]}>
                              <View style={{width:"60%" , paddingLeft : dimensions.paddingLevel1 * 1.3}}>
                                   <Text style={{fontFamily: fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium}}>{subject}</Text>
                              </View>
                              <View style={{width:"20%", alignItems : 'center'}}>
                                    <Text style={{fontFamily: fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium , color : "rgba(0,0,0,0.9)" , justifyContent : 'center'}}>{mark}</Text>
                              </View>
                              <View style={{width:"20%" , alignItems : 'center'}}>
                                    <Text style={[styles.gradeText ,{color : _color}]}>{grade}</Text>
                              </View>
               </View>
          </>
     )
}



// Buttons for Terms 
const TermsButton =({name="" ,styleButton={} , styleButtonText={} }) => {
    
//     select button style
     let btnStyle = styleButton;
     let btnTextStyle = styleButtonText;
     const selectedButton ={backgroundColor : "#E0EBEB"};
     const selectedButtonText = {color : '#007F82'};
     // add redux condition here
     if(true) {
          btnStyle=[styleButton , selectedButton];
          btnTextStyle=[styleButtonText , selectedButtonText];
     }

     return (
          <TouchableOpacity style={btnStyle}>
               <Text style={btnTextStyle}>{name}</Text>
          </TouchableOpacity>
     )
}

// main
 const ViewMarksScreen = () => {
   
    
   

     return (
          <>
               <HamIconWithBar />

               <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5}} />
               {/* main Container */}
               <View style={styles.mainContainer}>
                   <View style={{flexDirection : 'row' , alignItems : 'center' , justifyContent: 'space-between'}}>
                     <Text style={styles.viewMarkssText}>View Marks</Text>
                        
                        {/* dropDown menu */}
                         <View style={{width : dimensions.widthLevel11 * 0.8 }}>
                         <DropDownPicker
                              items={[
                                   {label: '1-A', value: '1A'},
                                   {label: '2-B', value: '2B'},
                              ]}
                              defaultIndex={0}
                              containerStyle={{height: 40}}
                              onChangeItem={item => console.log(item.label, item.value)}
                              placeholder="Grade"
                              style={{opacity : 0.6}}
                              />
                         </View>
                   </View>
                    <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                    
                    {/* Term Container */}
                    <View style={{width : "100%" , flexDirection : 'row', justifyContent : 'space-between'}}>
                         <TermsButton name="Term 1"  styleButton={[styles.termsButton ,{backgroundColor : "#E0EBEB"}]} styleButtonText={[styles.termsButtonText , {color : '#007F82'}]} />
                         <TermsButton name="Term 2"  styleButton={styles.termsButton} styleButtonText={styles.termsButtonText} />
                         <TermsButton name="Term 3"  styleButton={styles.termsButton} styleButtonText={styles.termsButtonText} />
                    </View>
                    <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                    {/* [TABLE] subject marks box */}
                    <View>
                         <View style={{flexDirection : 'row' , width : '100%' , }}>
                              <View style={{width:"60%" , paddingLeft : dimensions.paddingLevel1 * 1.3}}>
                                   <Text style={{fontFamily: fontFamilies.PoppinsRegular , fontSize : fontSizes.fontLarge}}>Subject</Text>
                              </View>
                              <View style={{width:"20%", alignItems : 'center'}}>
                                    <Text style={{fontFamily: fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium , color : "rgba(0,0,0,0.5)" , justifyContent : 'center'}}>Mark</Text>
                              </View>
                              <View style={{width:"20%" , alignItems : 'center'}}>
                                    <Text style={{fontFamily: fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium , color : "rgba(0,0,0,0.5)" , justifyContent : 'center'}}>Grade</Text>
                              </View>
                         </View>


                         {/* Childern [ROW] */}
                         <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                         <View style={styles.listContainer}>
                             <ScrollView>

                                   {/* use with array */}
                                   <CardItem  id={0} mark={85} cardItemListLength={5} subject="Mathamatrics" />    
                                   <CardItem  id={1} mark={65} cardItemListLength={5} subject="Science" />    
                                   <CardItem  id={2} mark={55} cardItemListLength={5} subject="Information & Com" />    
                                   <CardItem  id={3} mark={35} cardItemListLength={5} subject="English" />    
                                   <CardItem  id={4} mark={25} cardItemListLength={5} subject="Art" />   

                             </ScrollView>
                         </View>        


                         <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                          <View style={{width : "100%" , paddingHorizontal :dimensions.paddingLevel2, paddingVertical : dimensions.paddingLevel1 * 0.5 , flexDirection :'row' , alignItems : 'center'}}>
                              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                     <SummaryCard mainText="12%" subText="Average" />
                                     <SummaryCard mainText="1" subText="place" />
                                     <SummaryCard mainText="230" subText="Overall Score" />
                                     <SummaryCard mainText="12" subText="Subjects" />
                                     <SummaryCard mainText="12" subText="Subjects" />
                                     <SummaryCard mainText="12" subText="Subjects" />
                              </ScrollView>
                          </View>    


                    </View>

               </View>

          </>
     )
}

const styles = StyleSheet.create({
     mainContainer: {  paddingHorizontal : dimensions.paddingLevel4 },
     viewMarkssText: { fontFamily: fontFamilies.PoppinsMedium, fontSize: fontSizes.fontLarge * 1.05 }, 

     termsButton : {backgroundColor : "rgba(255,255,255,0.9)" , alignItems : 'center' ,borderRadius : 6 ,padding: dimensions.paddingLevel1, width : "31%"},
     termsButtonText : {color : 'rgba(0,0,0,0.5)' , fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontMidMedium},
     listContainer : {flexDirection : 'row' , width : '100%' ,backgroundColor : colors.white , paddingVertical : dimensions.paddingLevel3 , borderRadius : 8,paddingHorizontal : dimensions.paddingLevel1 , height : dimensions.heightLevel10 * 1.8},
     listItem : { width : "100%"  , paddingVertical : dimensions.paddingLevel1 , flexDirection : 'row'},
     gradeText : {fontFamily: fontFamilies.PoppinsRegular, color : "rgba(0,0,0,0.9)" , fontSize : fontSizes.fontMidMedium , justifyContent : 'center' },

});

export default ViewMarksScreen