import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import { Actions } from 'react-native-router-flux';

const SignUpScreen = () => {
     return (
          <>
        
               <LayoutBackground />
               
               {/* main Container  */}
               <KeyboardAvoidingView  style={{justifyContent : 'center' , alignItems : 'center'  , position : 'absolute' , width : dimensions.fullWidth , height : dimensions.fullHeight }}>
                    <View style={styles.container}>
                         <Text style={styles.loginText}>Register</Text>
                         <EmptyView style={{marginTop : dimensions.heightLevel1}}/>
                         <Text style={styles.login_subText}>Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.</Text>
                        
                         <EmptyView style={{ marginTop: dimensions.heightLevel4 }} />
                         
                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              {/* input student name */}
                              <TextField
                                   placeholder="student name "
                                   width={dimensions.widthLevel5}
                              />
                              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                              {/* input student number */}
                               <TextField
                                   placeholder="student number "
                                   width={dimensions.widthLevel5}
                              />
                              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                              {/* input password */}
                              <TextField
                                   showEye
                                   isPassword
                                   placeholder="password "
                                   width={dimensions.widthLevel5}
                              />
                              <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />

                               <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />
                             {/* button */}
                              <ListButton
                                   name="Register"
                                   customButton={styles.button}
                                   customButtonText={styles.buttonText} />
                         </View>
                         
                         <EmptyView style={{ marginTop: dimensions.heightLevel1}} />
                    </View>

                    <EmptyView style={{ marginTop: dimensions.heightLevel5}} />
                    <View style={styles.footerContainer}>
                         <Text style={styles.dontHaveAccText}>Already have an Account? </Text>
                         {/* signUp button */}
                         <TouchableOpacity
                              onPress={()=> Actions.loginScreen()}
                              style={{ paddingHorizontal: 5, paddingVertical: 5 }}
                         >
                              <Text style={styles.registerText}> Login</Text>
                         </TouchableOpacity>
                         <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                    </View>
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


export default SignUpScreen