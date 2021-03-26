// import React , {useEffect , useState} from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView , Image } from 'react-native';
// import { colors, dimensions, fontFamilies, fontSizes } from '../configurations/constants';
// import EmptyView from '../components/EmptyView'
// import Icon from 'react-native-vector-icons/FontAwesome';

// const BottomTabBar = () => {
//      return (
//           <View style={styles.container}>
               
//           </View>
//      )
// }

// const styles = StyleSheet.create({
//      container : {width : dimensions.fullWidth , height : dimensions.heightLevel5 , backgroundColor : colors.red}
// });

// export default BottomTabBar












import React, {useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, BackHandler } from "react-native";
import { Actions } from 'react-native-router-flux';
import {colors, dimensions, fontFamilies, fontSizes, getShadows, imageSizes} from '../configurations/constants';
import LinearGradient from 'react-native-linear-gradient';
import {tabImages} from './TabNavigations';

const BottomTabBar = (props) => {

    const { state } = props.navigation;

    const [activeTabIndex,setActiveTabIndex] = useState(state.index);

    useEffect(()=>{
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          ()=>{
              if(activeTabIndex === 0) {
                  BackHandler.exitApp();
              } else {
                  setActiveTabIndex(0);
              }
          }
        );

        return ()=>backHandler.remove();
    },[activeTabIndex])

    return (
        <View style={styles.container}>
            {
                state.routes.map((element,index) =>
                    <TouchableOpacity
                        key={element.key}
                        onPress = {() => {
                            Actions[element.key]();
                            setActiveTabIndex(index);
                        }}
                    >

                         <View style={{width :dimensions.fullWidth / 4 , justifyContent : 'center' , alignItems : 'center'}}>
                           <Image style={imageSizes.smallPlusIcon} source={ activeTabIndex === index ? tabImages[index].active : tabImages[index].inactive} />
                            <Text style={activeTabIndex === index ? styles.activeText : styles.inactiveText} >{element.key.toUpperCase()}</Text>
                         </View>



                        {/* <LinearGradient style={styles.tab} key={index} colors={activeTabIndex === index ? [colors.midGreen,colors.black] : [colors.white,colors.white]}>
                           
                        </LinearGradient> */}
                    </TouchableOpacity>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white',
        padding: dimensions.fullWidth*1/100,
        paddingVertical : dimensions.paddingLevel1 * 1.3,
        ...getShadows
    },
    tab: {
        paddingTop: dimensions.heightLevel1,
        paddingBottom: dimensions.heightLevel1,
        paddingLeft: dimensions.heightLevel1,
        paddingRight: dimensions.heightLevel1,
        width: dimensions.fullWidth*23/100,
        height: dimensions.fullWidth*20/100,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeText: {
        color: colors.black,
        fontFamily: fontFamilies.PoppinsRegular,
        fontSize: fontSizes.fontSmall,
        marginTop: dimensions.heightLevel1/5
    },
    inactiveText: {
        color: "rgba(0,0,0,0.5)",
        fontFamily: fontFamilies.poppinsRegular,
        fontSize: fontSizes.fontSmall,
        marginTop: dimensions.heightLevel1/5
    }
})


export default BottomTabBar
