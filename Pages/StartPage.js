/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Button,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 import {  Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
 import { useFonts } from 'expo-font';
 import AppLoading from "expo-app-loading";
 import {SearchBar} from 'react-native-elements';
 import SearchComponent from '../components/SearchComponent';
 
 var size = 150;
 var t_b = 100;
 var l_r = 30;
 
 const styles = StyleSheet.create({
  safeArea: {
    flex :1 ,
    backgroundColor : '#fff',
  },
  header: {
    padding:  15,
    paddingLeft: 10,
    paddingRight: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9FD4AB'
},
headingText:{
  textAlignVertical: 'center',
  paddingLeft:19,
  paddingRight: 10,
  textAlign: 'left',
  fontWeight: 'bold', 
  fontSize: 25, 
  color: '#fff',
  width: '100%',
  fontFamily: 'Roboto_900Black'
  
},
   screen: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   myPantryButton: {
     position: 'absolute',
     width: size,
     height: size,
     top: t_b,
     left: l_r,
     //justifyContent: 'center',
     //alignItems: 'center',
     padding: 10,
     borderRadius: 100,
     backgroundColor: '#c1d4d3',
   },
   myFridgeButton: {
     position: 'absolute',
     width: size,
     height: size,
     top: t_b,
     right: l_r,
     //justifyContent: 'center',
     //alignItems: 'center',
     padding: 40,
     borderRadius: 100,
     backgroundColor: '#c4c991',
   },
   myFreezerButton: {
       position: 'absolute',
       width: size,
       height: size,
       bottom: t_b + 80,
       left: l_r,
       //justifyContent: 'center',
       //alignItems: 'center',
       padding: 10,
       borderRadius: 100,
       backgroundColor: '#9faad4',
     },
   mySpicesButton: {
         position: 'absolute',
         width: size,
         height: size,
         bottom: t_b + 80,
         right: l_r,
         //justifyContent: 'center',
         //alignItems: 'center',
         padding: 10,
         borderRadius: 100,
         backgroundColor: '#e69b97',
       },
   sectionButton:{
       marginRight:40,
       marginLeft:40,
       marginTop:450,
       paddingTop:40,
       paddingBottom:10,
       paddingRight: 20,
       paddingLeft:20,
       backgroundColor:'#284d2f',
       borderRadius:10,
       borderWidth: 1,
       borderColor: '#000000'
     }
 });
 
 
 const StartPage = ({navigation}) => {
    //getting font
    let [fontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_900Black,
   });

   if(!fontsLoaded){
       return <AppLoading /> ;
   }  

   return (
    <SafeAreaView style= {styles.safeArea}>
      <View style = {styles.header}>
      <Text style= {styles.headingText}>MiCocina</Text>
      </View>
      <View>
      <SearchComponent onSearchEnter={(newTerm) => {setTerm(newTerm)}} />
 
     <TouchableOpacity
               style={styles.sectionButton}
               onPress={() => navigation.navigate('Pantry')}
               underlayColor='#fff'>
               <Text style={{
                 position: 'absolute',
                 right: 63,
                 bottom: 10,
                 fontWeight: 'bold',
                 fontSize: 24,
               }}>
               View All Sections</Text>
 
      </TouchableOpacity>
 
     <React.Fragment>
           <Text style={{
             position: 'absolute',
             top: 250,
             left: l_r + 40,
             fontWeight: 'bold'
           }}>
             MY PANTRY
           </Text>
     </React.Fragment>
 
     <React.Fragment>
           <Text style={{
             position: 'absolute',
             top: 250,
             right: l_r + 40,
             fontWeight: 'bold'
           }}>
             MY FRIDGE
           </Text>
     </React.Fragment>
 
     <React.Fragment>
           <Text style={{
             position: 'absolute',
             bottom: 155,
             left: l_r + 35,
             fontWeight: 'bold'
           }}>
             MY FREEZER
           </Text>
     </React.Fragment>
 
     <React.Fragment>
           <Text style={{
             position: 'absolute',
             bottom: 155,
             right: l_r + 40,
             fontWeight: 'bold',
             fontFamily: 'Cochin'
           }}>
             MY SPICES
           </Text>
     </React.Fragment>
 
 
     <TouchableOpacity onPress={() => navigation.navigate('Pantry')}
                   style={styles.myPantryButton}>
     </TouchableOpacity>
 
     <TouchableOpacity onPress={() => navigation.navigate('Pantry')}
                 style={styles.myFreezerButton}>
     </TouchableOpacity>
 
     <TouchableOpacity onPress={() => navigation.navigate('Pantry')}
                 style={styles.myFridgeButton}>
     </TouchableOpacity>
 
     <TouchableOpacity onPress={() => navigation.navigate('Pantry')}
                 style={styles.mySpicesButton}>
     </TouchableOpacity>
 
   </View>
   </SafeAreaView>
   );
 };
 
 export default StartPage;
 