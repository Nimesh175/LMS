import React , {useEffect , useState ,useRef} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView ,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import { KEYBOARD_TYPES } from '../../configurations/appData';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 5;


export const ForgotPasswordScreen = () => {


          // OTP
          const [enableMask, setEnableMask] = useState(true);
          const [value, setValue] = useState('');
          const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
          const [props, getCellOnLayoutHandler] = useClearByFocusCell({
          value,
          setValue,
          });
          const toggleMask = () => setEnableMask(f => !f);
          const renderCell = ({index, symbol, isFocused}) => {
          let textChild = null;

          if (symbol) {
               textChild = !enableMask ? '•' : symbol;
          } else if (isFocused) {
               textChild = <Cursor />;
          }

          return (
               <Text
               key={index}
               style={[styles.cell, isFocused && styles.focusCell]}
               onLayout={getCellOnLayoutHandler(index)}>
               {textChild}
               </Text>
          );
          };
          // OTP [END]




     return (
          <>
               <LayoutBackground />
               
               {/* main Container  */}
               <KeyboardAvoidingView  style={{justifyContent : 'center' , alignItems : 'center'  , position : 'absolute' , width : dimensions.fullWidth , height : dimensions.fullHeight }}>
                    <View style={styles.container}>
                         <Text style={styles.loginText}>Forgot Password</Text>
                         <EmptyView style={{marginTop : dimensions.heightLevel1}}/>
                         <Text style={styles.login_subText}>Perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.</Text>
                        
                         <EmptyView style={{ marginTop: dimensions.heightLevel4 }} />
                         
                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                             
                         <Text style={styles.verifycationText}>Enter verification code</Text>

                              {/* OTP input */}
                              <View style={styles.fieldRow}>
                              <CodeField
                                   ref={ref}
                                   {...props}
                                   value={value}
                                   onChangeText={setValue}
                                   cellCount={CELL_COUNT}
                                   keyboardType="number-pad"
                                   textContentType="oneTimeCode"
                                   renderCell={renderCell}
                              />
                              {/* <Text style={styles.toggle} onPress={toggleMask}>
                                   {enableMask ? '🙈' : '🐵'}
                              </Text> */}
                              </View>
                              




                              <EmptyView style={{ marginTop: dimensions.heightLevel3 }} />

                              
                              <View style={styles.HaventReveivedContainer}>
                                        <Text style={styles.HaventReceivedText}>Haven't received? </Text>
                                        {/* register button */}
                                        <TouchableOpacity
                                             style={{ paddingHorizontal: 5, paddingVertical: 5 }}
                                        >
                                             <Text style={styles.resendText}>resend</Text>
                                        </TouchableOpacity>
                              </View>


                              <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
                              {/* button */}
                              <ListButton
                                   name="Verify"
                                   customButton={styles.button}
                                   customButtonText={styles.buttonText} />
                         </View>
                         
                         <EmptyView style={{ marginTop: dimensions.heightLevel1}} />
                    </View>

                    <EmptyView style={{ marginTop: dimensions.heightLevel2}} />
                  
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
          height: dimensions.heightLevel8 / 2.1,
     },
     buttonText: {
        fontFamily: fontFamilies.PoppinsRegular,
        color: 'rgba(255,255,255,0.8)',
        fontSize : fontSizes.fontLarge,
        paddingLeft: dimensions.paddingLevel3,
        paddingRight: dimensions.paddingLevel3
     },

     HaventReceivedText : { textAlign: 'center', fontFamily: fontFamilies.PoppinsRegular, fontSize: fontSizes.fontMedium, color: 'rgba(255,255,255,0.7)'} ,
     resendText: { textAlign: 'center', fontFamily: fontFamilies.PoppinsBold, fontSize: fontSizes.fontMedium, color: 'rgba(255,255,255,0.7)' },
     HaventReveivedContainer: { flexDirection: 'row', bottom: dimensions.heightLevel2, width: "100%", justifyContent: 'flex-end', alignItems: 'center' },
     
     // OTPcontainer : {},


     root: {padding: 20, minHeight: 300},
     title: {textAlign: 'center', fontSize: 30},
     fieldRow: {
          marginTop: 20,
          flexDirection: 'row',
          marginLeft: 8,
          width: "100%",
          justifyContent: 'space-between',
          },
          cell: {
          width: 55,
          height: 55,
          lineHeight: 55,
          fontSize: 30,
          fontWeight: '700',
          textAlign: 'center',
          marginLeft: 8,
          borderRadius: 6,
          backgroundColor: '#eee',
          },
          toggle: {
          width: 55,
          height: 55,
          lineHeight: 55,
          fontSize: 24,
          textAlign: 'center',
          },
          focusCell: {
          borderColor: '#000',
     },
          
      verifycationText : {fontFamily : fontFamilies.PoppinsRegular , fontSize : fontSizes.fontLarge , color : 'rgba(255,255,255,0.8)' , textAlign :'left' , width : '100%'}

});