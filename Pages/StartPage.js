/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState,useEffect} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Button,
   useColorScheme,
   View,
   Image,
   TouchableOpacity,
 } from 'react-native';
 import {  Roboto_700Bold, Roboto_900Black,Roboto_100Thin,Roboto_400Regular} from '@expo-google-fonts/roboto';
 import { useFonts } from 'expo-font';
 import AppLoading from "expo-app-loading";
 import {Icon, SearchBar} from 'react-native-elements';
 import { useNavigation } from '@react-navigation/native';
 import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
 //import SearchComponent from '../components/SearchComponent';
 
 var size = 150;
 var t_b = 100;
 var l_r = 30;
 
 const styles = StyleSheet.create({
  safeArea: {
    flex :1 ,
    backgroundColor : 'white',
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
  textAlign: 'center',
  fontWeight: 'bold', 
  fontSize: 38, 
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
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
     borderRadius: 100,
     backgroundColor: '#c1d4d3',
   },
   myGroceryButton: {
         position: 'absolute',
         width: size,
         height: size,
         justifyContent: 'center',
         alignItems: 'center',
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
     },
     body:{
      textAlignVertical: 'center',
      paddingTop:10,
      paddingLeft:19,
      paddingRight: 10,
      textAlign: 'left',
      fontSize: 18, 
      color: "black",
      width: '100%',
     fontFamily: 'Roboto_400Regular'
     }, 
     oval: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "red",
      transform: [{ scaleX: 2 }],
       justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "red",
    },
    rectangle:{
        width: 400,
        height: 200,
        backgroundColor: "red",
    },
    content:{
      padding: 20,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 15,
        borderWidth: 1,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#fff',
    },

 });
 
 
 const StartPage = () => {
  const navigation = useNavigation(); 
   const [term, setTerm] = useState("");
    //getting font
    let [fontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_900Black,
      Roboto_100Thin,
      Roboto_400Regular,
   });

   if(!fontsLoaded){
       return <AppLoading /> ;
   }  

   
//<SearchComponent onSearchEnter={(newTerm) => {setTerm(newTerm)}} />
   return (
    <SafeAreaView style= {styles.safeArea}>
      <View style = {styles.header}>
      <Text style= {styles.headingText}>MICOCINA</Text>
      </View>
      <View>
      <Text style = { styles.body}>Welcome to MiCocina! To get started, click on an icon below to add items to your pantry or grocery list</Text>
      <View style ={styles.content}>
      <TouchableOpacity
             onPress={() => navigation.navigate('Pantry')}
             underlayColor='#fff'>
               <Image source={require('./images/pantry.jpeg')} style={styles.rectangle} />
         </TouchableOpacity>
         <Text style={{
               position: 'absolute',
               fontWeight: 'bold',
               fontSize: 50,
               color:'#000',
               fontFamily: 'Roboto_900Black'
             }}>
             PANTRY</Text>
          </View>
          <View style ={styles.content}>
      <TouchableOpacity
             onPress={() => navigation.navigate('Grocery')}
             underlayColor='#fff'>
               <Image source={require('./images/grocery.jpeg')} style={styles.rectangle} />
         </TouchableOpacity>
         <Text style={{
               position: 'absolute',
               fontWeight: 'bold',
               fontSize: 50,
               color:'#000',
               fontFamily: 'Roboto_900Black'
             }}>
             GROCERY LIST</Text>
          </View>
 
 
     
 
  
   </View>
   </SafeAreaView>
   );
 };
 
 export default StartPage;
 