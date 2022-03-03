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

const StartPage = ({navigation}) => {

  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Mi Cocina</Text>
    <Button title='Start' onPress={() => navigation.navigate("Pick")}>Begin</Button>
  </View>
  );
};

export default StartPage;
