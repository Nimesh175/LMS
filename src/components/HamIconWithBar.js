import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView , Image } from 'react-native';
import { imageSizes,colors, dimensions, fontFamilies, fontSizes} from '../configurations/constants';
import EmptyView from './EmptyView'

const hamIcon = require("../assets/images/hamIcon.webp")
const HamIconWithBar = ({DP = require("../assets/images/men-1.png") , isUseDrawer=false , name="Jorge" , drawerHeadTitle="" }) => {
    
     return (
          <>
               <View style={styles.container}>
                    {/* ham icon */}
                    <TouchableOpacity  style={styles.hamImgContainer}  >
                         <Image source={hamIcon}  style={styles.hamImg}  />
                    </TouchableOpacity>

                    {/* user name */}
                    <View  style={styles.usernameContainer}>
                         {
                              isUseDrawer ?  <Text style={styles.usernameText}>{drawerHeadTitle}</Text> :
                              <Text style={styles.usernameText}>Hello, {name}</Text>
                         }
                    </View>
                    
                    {/* Display Picture */}
                     <View  style={styles.DPContainer}>
                           <Image source={DP}  style={styles.DPImg}  />
                   </View>


               </View>
                <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
        </>
     )
}

const styles = StyleSheet.create({
     container: { backgroundColor: colors.white, width: dimensions.fullWidth, flexDirection: 'row' ,paddingVertical : dimensions.paddingLevel1 *1.3 , paddingHorizontal : dimensions.paddingLevel1 ,},
     hamImgContainer: { width: "15%", left: 0, alignItems : 'center', justifyContent: 'center', padding : 5  },
     hamImg: {...imageSizes.smallPlusIcon  },
     

     usernameContainer : { justifyContent: 'center', alignItems :'center' , width : "62%"} ,
     usernameText : {fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontMediumPlus},
     DPContainer: { justifyContent: 'center', alignItems: 'center', width: "20%" },
     DPImg : { borderRadius : 10 , height : imageSizes.smallPlusIcon.height * 1.9 , width : imageSizes.smallPlusIcon.width * 2 },
});


export default HamIconWithBar