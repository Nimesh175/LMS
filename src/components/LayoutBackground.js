import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet ,Image } from 'react-native';
import { colors , dimensions} from '../configurations/constants'

const decorationOne = require("../assets/images/decoration-1.webp");
const eclipse01 = require("../assets/images/e1.webp");
const eclipse02 = require("../assets/images/e2.webp");
const eclipse03 = require("../assets/images/e3.webp");


export const LayoutBackground = () => {
     return (
          <View style={styles.container}>
               <Image source={decorationOne} style={styles.imgOne} />
               <Image source={decorationOne} style={styles.imgTwo} />
                    {/* eclipse */}
               <Image source={eclipse01} style={styles.imgEOne} />
               <Image source={eclipse02} style={styles.imgETwo} />
               <Image source={eclipse03} style={styles.imgEThree} />
          </View>
     )
}

const styles = StyleSheet.create({
     container : {
          backgroundColor : colors.primary,
          width: dimensions.fullWidth,
          // height :dimensions.fullHeight,
          height : "100%",
     },
     imgOne: {transform: [{ rotate: '190deg' }], position : 'absolute' , alignSelf : 'center' , top : dimensions.heightLevel1 * 0.1 },
     // imgTwo: { transform: [{ rotate: '0deg' }], position: 'absolute', left: dimensions.paddingLevel2, bottom: dimensions.heightLevel3 * 0.8 },
     imgTwo: { transform: [{ rotate: '0deg' }], position: 'absolute', left: dimensions.paddingLevel2, bottom: dimensions.heightLevel1 * 0.1},
     
     imgEOne: {transform: [{ rotate: '0deg' } , {scale : 1.24}], position : 'absolute'  , left : 0 , top : -15 },
     imgETwo: {transform: [{ rotate: '0deg' } ], position : 'absolute'  , alignSelf : 'center', top : dimensions.fullHeight * 0.23 },
     imgEThree: {transform: [{ rotate: '0deg' }, {scale : 0.9} ], position : 'absolute'  , right : 0, top : dimensions.fullHeight * 0.40 },

});
