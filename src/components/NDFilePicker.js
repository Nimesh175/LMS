
// [IMPORTANT]
/** 
 * 
 * [INSTRALL ON TERMINAL]
 * npm install react-native-document-picker --save
 * 
 *  android → app → src → main → AndroidManifest.xml           >> ADD >> Add below permission (before <application tag , inside <manifest element )
 *        <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
 * 
 * >> , and import the CONSTANT file 
 * 
 * [ios]
 * cd ios && pod install && cd ..
 */





import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';
import DocumentPicker from 'react-native-document-picker';



class NDFilePicker extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
            singleFile: '',
            fileList: [],
          };
        }
      
        async selectOneFile() {
          try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.allFiles],
            });
            console.log('selectOneFile() : ' + JSON.stringify(res));
            this.setState({ singleFile: res });
          }
          catch (err) {
            //If user cancels document selection
            if (DocumentPicker.isCancel(err)) {
              alert('Canceled from single doc picker');
            }
            else {
              alert('Unknown Error: ' + JSON.stringify(err));
              throw err;
            }
          }
        }
      
        async selectfileList() {
          try {
            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.images],
            });
            for (const res of results) {
              console.log('selectfileList() : ' + JSON.stringify(res));
            }
            this.setState({ fileList: results });
          }
          catch (err) {
            if (DocumentPicker.isCancel(err)) {
              alert('Canceled from multiple doc picker');
            }
            else {
              alert('Unknown Error: ' + JSON.stringify(err));
              throw err;
            }
          }
        }


      //use this 
        getFileText(item) {
          //    add to REDUX 
               const fileOBJ = {
                    fileName : item.name ? item.name : null ,
                    typeOfFile : item.type ? item.type : null ,
                    fileSize : item.size ? item.size : 0 ,
                    URI : item.uri ? item.uri : null
               }

          return fileOBJ
        };
      


        render() {

          return (
            <>
                  {/* USE REDUX , bcz this state is temporary */}

                  {   
                       this.props.isSingleFile ?
                         <ListButton
                                   name="Choose file"
                                   onPress={this.selectOneFile.bind(this)}
                                   customButton={styles.buttonChooseFile}
                                   customButtonText={ styles.buttonTextChooseFile} />


                       :  <ListButton
                                   name="Choose all files"
                                   onPress={this.selectfileList.bind(this)}
                                   customButton={styles.buttonChooseFile}
                                   customButtonText={ styles.buttonTextChooseFile} />

                    }

                    {/* {this.getFileText(this.state.singleFile)} */}
                    

                          {/*Get temporary Multifle files */}
                         {/*
                              {this.state.fileList.map((item, key) => (
                              <View key={key}>
                                   {this.getFileText(item)}
                              </View>
                              ))}
                          */}
            </>
          );
        }
}



const styles = StyleSheet.create({
     text: {
       backgroundColor: '#fff',
       fontSize: 15,
       marginTop: 16,
       color: 'black',
     },
     button: {
       alignItems: 'center',
       flexDirection: 'row',
       backgroundColor: '#fd2ded',
       padding: 5,
     },
     imageIcon: {
       height: 20,
       width: 20,
       resizeMode: 'stretch'
     },

     // edit here
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



export default NDFilePicker









// [CUSTOM] Button


const ListButton = ({name = null, onPress = ()=>{}, disabled=false , customButton={} , customButtonText={}}  ) => {
     return (
       disabled ?
         <TouchableWithoutFeedback >
             <View  style={ Object.keys(customButton).length === 0 || disabled ? stylesSheet.button2 : customButton}>  
                 <Text style={ Object.keys(customButtonText).length === 0  || disabled ? stylesSheet.buttonText2 : customButtonText } >{name}</Text>
            </View>
         </TouchableWithoutFeedback>
         :
         <TouchableOpacity onPress={onPress}  >
             <View style={ Object.keys(customButton).length === 0 ? stylesSheet.button : customButton }>
                 <Text style={ Object.keys(customButtonText).length === 0 ? stylesSheet.buttonText : customButtonText }>{name}</Text>
             </View>
         </TouchableOpacity>
     )
 }
 
 const stylesSheet = StyleSheet.create({
     button: {
         borderRadius: 10,
         padding: dimensions.paddingLevel2/2,
         justifyContent:'center',
         alignItems: 'center',
         backgroundColor: 'white',
         borderWidth: 1,
         borderColor : 'rgba(0,0,0,0.1)',
     },
      button2: {
         borderRadius: 10,
         padding: dimensions.paddingLevel2/2,
         justifyContent:'center',
         alignItems: 'center',
         backgroundColor: 'gray',
         borderWidth: 1,
         borderColor : 'rgba(0,0,0,0.1)',
         
     },
     buttonText: {
         fontFamily: fontFamilies.candaraBold,
         color: 'rgba(0,0,0,0.7)',
         fontSize : fontSizes.fontLarge,
         paddingLeft: dimensions.paddingLevel3,
         paddingRight: dimensions.paddingLevel3
     },
 
     buttonText2: {
         fontFamily: fontFamilies.candaraBold,
         color: 'rgba(0,0,0,0.3)',
         fontSize : fontSizes.fontLarge,
         paddingLeft: dimensions.paddingLevel3,
         paddingRight: dimensions.paddingLevel3
     }
 })
 

 
