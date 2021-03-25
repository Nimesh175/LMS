import React , {useEffect , useState} from 'react';
import { View ,Text , StyleSheet, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LayoutBackground } from '../../components/LayoutBackground';
import { colors, dimensions, fontFamilies, fontSizes } from '../../configurations/constants';
import EmptyView from '../../components/EmptyView'
import TextField from '../../components/TextField';
import ListButton from '../../components/ListButton';
import TopNavigationBar from '../../components/TopNavigationBar';
import { ScrollView } from 'react-native';


const TitleAndPharagraph = ({title="" ,description=""}) => {
     return (
          <>
                 <Text style={{fontFamily : fontFamilies.PoppinsMedium, fontSize : fontSizes.fontLarge}}>{'\u2022'} Title 01</Text>
               <Text style={{fontFamily : fontFamilies.PoppinsLight , fontSize : fontSizes.fontMedium , color : 'rgba(0,0,0,0.7)'}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s .
               </Text>
               <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
          </>
     )
}


const PrivacyScreen = () => {
     return (
          <>
               {/* send to stack router action > using onPress */}
               <TopNavigationBar name={"Privacy & Seurity"} />



               <EmptyView style={{ marginTop: dimensions.heightLevel2 }} />
               <View style={styles.container}>
                  <ScrollView style={{paddingRight : dimensions.paddingLevel2}} >
                  <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                      {/* add pharagraph & title here */}
                       <TitleAndPharagraph title={""} description={""} />
                       <TitleAndPharagraph title={""} description={""} />
                       <TitleAndPharagraph title={""} description={""} />

                       <EmptyView style={{ marginTop: dimensions.heightLevel1 }} />
                  </ScrollView>
               </View>

          </>
     )
}

const styles = StyleSheet.create({
     container : { borderRadius : 20 ,paddingLeft : dimensions.paddingLevel2 * 1.3 , paddingVertical :dimensions.paddingLevel2   , width : dimensions.widthLevel1, alignSelf : 'center' 
     , backgroundColor : colors.white , height : dimensions.heightLevel10 * 4},
});

export default PrivacyScreen
