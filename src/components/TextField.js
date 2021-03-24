import React, {useEffect, useRef, useState} from 'react';
import {TouchableWithoutFeedback,Image,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {colors, dimensions, fontFamilies, fontSizes, imageSizes} from '../configurations/constants';
import { View } from "react-native-animatable";

const eye = require('../assets/images/eye.webp');
const eyeCut = require('../assets/images/eye-cut.webp');
const mastercardIcon = require('../assets/images/mastercard.png');


const TextField = ({
    placeholder = '', 
        isPassword = false,
            icon = null,
            onChangeText = () => { },
             textFieldStyles = {},
                 showEye = false,
                     keyboardType = 'default',
                        value = null,
                        editable = true,
                            isMultiline = false,
                                width = dimensions.widthLevel5  } ) => {

    
    const [onEye,setOnEye] = useState(false);
    const [passwordField,setPasswordField] = useState(isPassword);
    const [text,setText] = useState(null);

    const textInputRef = useRef(null);

    useEffect(()=>{
        setText(value);
    },[value])

    useEffect(()=> {
        if (isPassword) {
            textInputRef.current.setNativeProps({
                style: {fontFamily: fontFamilies.candaraRegular}
            })
        }
    },[])

    return (
        <TouchableWithoutFeedback style={{paddingRight : 5}} onPress={()=>textInputRef.current.focus()}>
            <View style={[styles.inputContainer,textFieldStyles , {width : width+22}]}>
                { icon ? <Image source={icon} style={[imageSizes.smallIcons, styles.icon]}/> : null}
                <TextInput
                  ref={textInputRef}
                  style={[styles.input,showEye ? {width: (width - 20), paddingRight : dimensions.paddingLevel1} : {width : width + 20 , paddingRight : dimensions.paddingLevel2} , icon !== null ? {width : width - 1} : width  ]  }
                  placeholder={placeholder}
                  placeholderTextColor={"rgba(255,255,255,0.6)"}
                  secureTextEntry={passwordField}
                  onChangeText={(text) => {
                      setText(text);
                      onChangeText(text);
                  }}
                  value={value ? value : text}
                  maxLength={220}
                  keyboardType={keyboardType}
                  editable={editable}
                  multiline={isMultiline}
                />
                {
                    isPassword && showEye ?
                      <TouchableOpacity style={{ position : 'absolute' , right :16 }}
                        onPress={()=>{
                            if (onEye) {
                                setPasswordField(true);
                            } else {
                                setPasswordField(false);
                            }
                            setOnEye(!onEye);
                        }}
                      >
                          <Image source={onEye ? eye : eyeCut} style={imageSizes.smallIcons }/>
                      </TouchableOpacity>
                      : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:'row',
        backgroundColor:  "rgba(255,255,255,0.3)",
        borderRadius: 10,
        height: dimensions.heightLevel8/2.1,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: colors.white,
        alignItems : 'center'
        // borderColor : "#006600"
    },
    input: {
        fontSize: fontSizes.fontMedium * 1.2   ,
        paddingLeft: dimensions.paddingLevel2,
        fontFamily: fontFamilies.candaraRegular,
        fontFamily: fontFamilies.PoppinsRegular,
        color: 'rgba(0,0,0,0.5)',
         height: dimensions.heightLevel8/2.1,
        
    },
    icon: {
        marginLeft: dimensions.paddingLevel2,
        marginRight: dimensions.paddingLevel1 * 0.5,
        minWidth : 23
    }
})

export default TextField;
