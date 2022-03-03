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
 } from 'react-native';
 
 const styles = StyleSheet.create({
   center: {
     alignItems: 'center'
   },
 
   green:  {
     color: "#90EE90"
   }
 })
 
 const ExpirationPage = () => {
   return (
   <View style={[styles.center, {top: 50}]}>
     <Text>Expiration PAge</Text>
   </View>
   );
 };
 
 export default ExpirationPage;