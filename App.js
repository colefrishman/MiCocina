/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import { StyleSheet, View, Text } from 'react-native-web';
 import BottomTabs from './Pages/BottomTabs';
 import { MenuProvider } from 'react-native-popup-menu';

 //const Stack = createNativeStackNavigator();
 
 const App = () => {
    return (
      <MenuProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </MenuProvider>
      
    );
 };
 
 export default App;

 const styles = StyleSheet.create({
   container: {
     flex : 1, 
     backgroundColor : '#fff',
     alignItems: "center",
     justifyContent : "center",
   },
  
 })