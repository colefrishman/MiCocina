/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PickerPage from './Pages/PickerPage';
import StartPage from './Pages/StartPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="Home" component={StartPage} />
        <Stack.Screen name="Pick" component={PickerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
