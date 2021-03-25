import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import TopAdvancedNavigationBar from '../../components/TopAdvancedNavigationBar';
import { ScrollView } from 'react-native';

const arrowDown = <Icon name="chevron-down" size={16} color={colors.primary} />;
const arrowUp = <Icon name="chevron-up" size={16} color={colors.primary} />;
const download = <Icon name="arrow-alt-circle-down" size={13} color={colors.red} />;


// list item
const ListItems = ({id , lessonTitle , lessonText=""}) => {

     const [isShow, setIsShow] = useState(false);

     return (
          <View id={id}>
           {/* [MAIN LIST] */}
               <TouchableOpacity 
                         style={styles.mainListContainer}  
                         onPress={ ()=>setIsShow(!isShow) } >
                    <View style={{width : "85%" }}>
                         <Text style={styles.mainList__text}>{lessonTitle}</Text>
                    </View>
                    <View style={{width : "15%"}}>
                    <Text>{isShow ? arrowUp: arrowDown}</Text>
                    </View>
               </TouchableOpacity>  


{/* set "lessonText" variable <<<  in th [SUB LIST] section */}

             {
               isShow ? 
                    <>
                         {/* [SUB LIST] */}
                    <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.1}} />
                    <View style={styles.subListContainer}>
                         <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.8}} />
                         <Text style={{fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontMedium}}>
                         This method has the advantage of fonts being copied from 
                         this module at build time so that the  fonts and JS are 
                         this module at build time so that the  fonts and JS are 
                         this module at build time so that the  fonts and JS are 
                         this module at build time so that the  fonts and JS are 
                         always in sync, making upgrades painless. 
                         </Text>
                         <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                         {/* download button */}
                         <View style={{width : dimensions.widthLevel10 * 0.5 , alignSelf : 'flex-end'}}>
                         <TouchableOpacity  style={[styles.button , {backgroundColor : colors.bgLightRed , borderColor : colors.red}]}>
                              <Text style={[styles.buttonText , {color : colors.red}]}>{download} Download</Text>
                         </TouchableOpacity>
                         </View>

                         <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                    </View>     

                    <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                    </> : null
             }

             <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5 }} />

          </View>
     )
}



// main
const LessonSubScreen = () => {
     return (
          <>
               {/* send to stack router action > using onPress */}
               <TopAdvancedNavigationBar name={"Geography"} />

               <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
               {/* teacher details */}
               <View style={styles.upperContainer}>
                    {/* image container */}
                    <View style={{width : "20%" , justifyContent : 'center', alignItems : 'center'}}>
                         <Image  source={require("../../assets/images/men-1.png")} style={styles.profileImg} />
                    </View>

                    {/* detail container */}
                    <View style={{width : "55%" , justifyContent : 'center'}}>
                         <Text style={{fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontLarge}}>R.A Deleca perera</Text>
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular, fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.5)'}}>Teacher</Text>
                    </View>
               </View>


               <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
               {/* middle container */}
               <View style={styles.middleContainer}>
                    <ScrollView style={{paddingRight : dimensions.paddingLevel1}}>
                    <EmptyView style={{ marginTop: dimensions.heightLevel1 * 0.5}} />
                         <ListItems id={1} lessonTitle="1.0 Chapter first lesson A "  lessonText="" />
                         <ListItems id={2} lessonTitle="1.1 Chapter first lesson A/1" lessonText="" />
                         <ListItems id={3} lessonTitle="1.2 Chapter first lesson A/2" lessonText="" />
                         <ListItems id={4} lessonTitle="2.0 Chapter first lesson B"   lessonText="" />
                    </ScrollView>
               </View>




          </>
     )
}

const styles = StyleSheet.create({
     container : { borderRadius : 20 ,paddingLeft : dimensions.paddingLevel2 * 1.3 , paddingVertical :dimensions.paddingLevel2   , width : dimensions.widthLevel1, alignSelf : 'center' 
                , backgroundColor : colors.white , height : dimensions.heightLevel10 * 4},

     upperContainer : {flexDirection : 'row' , width : dimensions.widthLevel1, alignSelf : 'center', paddingVertical : dimensions.paddingLevel1 ,backgroundColor : colors.white ,borderRadius : 10},
     profileImg : {width : dimensions.widthLevel10 * 0.25 , height : dimensions.widthLevel10 * 0.25 , borderRadius : 100 },

     middleContainer :{width : dimensions.widthLevel2 , alignSelf : 'center', height : dimensions.heightLevel10 * 3} ,
     
     mainListContainer : { borderTopRightRadius : 8 ,borderTopLeftRadius : 8 ,width : "100%" , backgroundColor: colors.white , paddingVertical : dimensions.paddingLevel1 ,flexDirection : 'row', justifyContent: 'center', alignItems :'center', paddingHorizontal : dimensions.paddingLevel1},
     mainList__text : {fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMidMedium, marginLeft : dimensions.paddingLevel1 * 0.5 },

     subListContainer : {width : '100%' , backgroundColor : 'rgba(255,255,255,0.7)' ,paddingLeft : dimensions.paddingLevel1  , 
                               paddingHorizontal : dimensions.paddingLevel1 , paddingRight : dimensions.paddingLevel2  , borderBottomRightRadius : 10 ,
                                borderBottomLeftRadius : 10},

     buttonText : {fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontSmallPlus},
     button : { paddingHorizontal : dimensions.paddingLevel1 , paddingVertical : dimensions.paddingLevel1 * 0.5 ,borderWidth : 1, borderRadius : 5 , marginLeft : 5,  justifyContent: 'center', alignItems : 'center'},
});

export default LessonSubScreen
