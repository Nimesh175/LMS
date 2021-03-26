import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import TopNavigationBar from '../../components/TopNavigationBar';
import DropDownPicker from 'react-native-dropdown-picker';
import FilePickerv2 from '../../components/NDFilePicker'
import { Actions } from 'react-native-router-flux';

const fileIcon = <Icon name="file-text" size={45} color={colors.primary}  />;
const plusIcon = <Icon name="plus" size={30} color={colors.primary}  />;



// main
const ManageMaterialScreen = () => {
     return (
          <>
               {/* send to stack router action > using onPress */}
               <TopNavigationBar name={"Manage materials"} action={() => Actions.homeScreen()} />




               <EmptyView  style={{marginTop : dimensions.heightLevel2}} />
               <View style={styles.mainContainer}>
                    <Text style={styles.mainText} >Upload subject each materials (Assignments, files, images)</Text>
                    <EmptyView  style={{marginTop : dimensions.heightLevel1}} />

                     {/* file chooseer */}
                    <View style={styles.fileChooseContainer}>
                         {/* icons */}
                         <Text styles={{}}>{fileIcon}{plusIcon}</Text>
                         <EmptyView  style={{marginTop : dimensions.heightLevel1 * 0.5}} />
                         <View style={{alignItems : 'center', width : "100%" }}>
                              {/* File Picker */}
                              <FilePickerv2 isSingleFile={true} />
                             
                         </View>
                    </View>


                    {/* Section 01 */}
                    <View>
                         <EmptyView  style={{marginTop : dimensions.heightLevel2}} />
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontLarge}}>Select topic Subject</Text>

                         <View style={{width : '100%'}}>
                              <DropDownPicker
                                   items={[
                                        {label: 'History', value: 'item1'},
                                        {label: 'Biology theory', value: 'item2'},
                                   ]}
                                   defaultIndex={1}
                                   containerStyle={{height: 40}}
                                   placeholder=" ..."
                                   labelStyle={{fontSize: fontSizes.fontMediumPlus, color: colors.primary , fontFamily : fontFamilies.PoppinsLight}}
                                   activeLabelStyle={{color: 'red'}}
                                   onChangeItem={item => console.log(item.label, item.value)}
                              />
                         </View>
                    </View>


                     {/* Section 2  */}
                    <View>
                         <EmptyView  style={{marginTop : dimensions.heightLevel1}} />
                         <Text style={{fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontLarge}}>Select topic type</Text>

                         <View style={{width : '100%'}}>
                              <DropDownPicker
                                   items={[
                                        {label: 'History', value: 'item1'},
                                        {label: 'Biology theory', value: 'item2'},
                                   ]}
                                   defaultIndex={1}
                                   containerStyle={{height: 40}}
                                   placeholder=" ..."
                                   labelStyle={{fontSize: fontSizes.fontMediumPlus, color: colors.primary , fontFamily : fontFamilies.PoppinsLight}}
                                   activeLabelStyle={{color: 'red'}}
                                   onChangeItem={item => console.log(item.label, item.value)}
                              />
                         </View>
                    </View>

                    {/* last -[BUTTON] */}
                    <View style={{alignSelf : 'center', width : '100%'}}>
                              <EmptyView  style={{marginTop : dimensions.heightLevel4}} />
                              <ListButton
                                   name="Submit"
                                   customButton={styles.button}
                                   customButtonText={styles.buttonText} />
                    </View>


                    <EmptyView  style={{marginTop : dimensions.heightLevel1}} />
               </View>

          </>
     )
}

const styles = StyleSheet.create({
   
     mainContainer : {width : dimensions.widthLevel1 , alignSelf : 'center' , paddingHorizontal : dimensions.paddingLevel1 },
     mainText : {fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontLarge},
     fileChooseContainer : {borderWidth : 1 , borderColor : colors.primary , borderRadius : 10 , height : dimensions.heightLevel10 * 1.5 , width : "100%" , borderStyle: 'dashed', justifyContent : 'center', alignItems :'center' , backgroundColor : 'rgba(255,255,255,0.1)'},

     button: {
          borderRadius: 10,
          padding: dimensions.paddingLevel2/2,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: colors.primary,
          borderWidth: 1,
          borderColor : 'rgba(255,255,255,0.9)',
          width: "100%",
          height: dimensions.heightLevel8/2.1,
       },
       buttonText: {
          fontFamily: fontFamilies.PoppinsRegular,
          color: 'rgba(255,255,255,0.8)',
          fontSize : fontSizes.fontLarge,
          paddingLeft: dimensions.paddingLevel3,
          paddingRight: dimensions.paddingLevel3
       },

       buttonChooseFile: {
          borderRadius: 5,
          padding: dimensions.paddingLevel1 * 0.2,
          justifyContent:'center',
          alignItems: 'center',
          // backgroundColor: colors.primary,
          borderWidth: 1,
          // borderColor : 'rgba(255,255,255,0.9)',
          borderColor : colors.primary,
          
       },
       buttonTextChooseFile: {
          fontFamily: fontFamilies.PoppinsRegular,
          // color: 'rgba(255,255,255,0.8)',
          color: colors.primary,
          fontSize : fontSizes.fontMedium,
          paddingLeft: dimensions.paddingLevel2,
          paddingRight: dimensions.paddingLevel2,
          textAlign : 'center'
       },

});

export default ManageMaterialScreen
