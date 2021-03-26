import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';

const ResetPasswordScreen = () => {
     return (
          <>
        
               <LayoutBackground />
               
               {/* main Container  */}
               <KeyboardAvoidingView  style={{justifyContent : 'center' , alignItems : 'center'  , position : 'absolute' , width : dimensions.fullWidth , height : dimensions.fullHeight }}>
                    <View style={styles.container}>
                         <Text style={styles.loginText}>Reset Password</Text>
                         <EmptyView style={{marginTop : dimensions.heightLevel1}}/>
                         <Text style={styles.login_subText}>Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.</Text>
                        
                         <EmptyView style={{ marginTop: dimensions.heightLevel4 }} />
                         
                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              {/* input student number */}
                              <TextField
                                   showEye
                                   isPassword
                                   placeholder="password "
                                   width={dimensions.widthLevel5}
                              />
                              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                              {/* input student password */}
                              <TextField
                                   showEye
                                   isPassword
                                   placeholder="confirm password "
                                   width={dimensions.widthLevel5}
                              />
                              <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                              <Text style={styles.forgotText}>Forgot Password?</Text>

                              <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />
                              {/* button */}
                              <ListButton
                                   name="Save"
                                   customButton={styles.button}
                                   customButtonText={styles.buttonText} />
                         </View>
                         
                         <EmptyView style={{ marginTop: dimensions.heightLevel1}} />
                    </View>

                    <EmptyView style={{ marginTop: dimensions.heightLevel5}} />
                   
               </KeyboardAvoidingView>

               
          
          </>
     )
}

const styles = StyleSheet.create({
     container: {  width: dimensions.widthLevel3, padding: dimensions.paddingLevel1  },
     loginText : {textAlign : 'center', fontFamily : fontFamilies.PoppinsMedium , fontSize : fontSizes.fontXXXXLarge , color : colors.white},
     login_subText : {textAlign : 'center', fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontMedium , color : 'rgba(255,255,255,0.7)'},
     forgotText: { textAlign: 'right', fontFamily: fontFamilies.PoppinsRegular, fontSize: fontSizes.fontMedium, color: 'rgba(255,255,255,0.7)', width: '100%' },
     
     button: {
        borderRadius: 10,
        padding: dimensions.paddingLevel2/2,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderWidth: 1,
        borderColor : 'rgba(255,255,255,0.9)',
        width: dimensions.widthLevel5 + 22,
        height: dimensions.heightLevel8/2.1,
     },
     buttonText: {
        fontFamily: fontFamilies.PoppinsRegular,
        color: 'rgba(255,255,255,0.8)',
        fontSize : fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
     },

     dontHaveAccText : { textAlign: 'center', fontFamily: fontFamilies.PoppinsRegular, fontSize: fontSizes.fontMedium, color: 'rgba(255,255,255,0.7)'} ,
     registerText: { textAlign: 'center', fontFamily: fontFamilies.PoppinsBold, fontSize: fontSizes.fontMedium, color: 'rgba(255,255,255,0.7)' },
     footerContainer : {flexDirection : 'row', bottom : dimensions.heightLevel2 , width: dimensions.fullWidth , justifyContent : 'center' , alignItems : 'center' },

});


export default ResetPasswordScreen