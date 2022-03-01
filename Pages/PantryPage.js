/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Button,
   useColorScheme,
   AsyncStorage,
   View,
 } from 'react-native';
 import { ListItem, Icon } from 'react-native-elements';
 
 const styles = StyleSheet.create({
   center: {
     alignItems: 'center'
   },
 
   green:  {
     color: "#90EE90"
   }
 })

 
 
 const PantryPage = () => {
   
  const [expanded, setExpanded] = useState(false)

   return (
   <View style={[styles.center, {top: 50}]}>
     <Text>Pantry Page</Text>
     <ListItem.Accordion
        content={
          <>
            <Icon name="place" size={30} />
            <ListItem.Content>
              <ListItem.Title>List Accordion</ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        >
          <ListItem key="1" bottomDivider>
            <ListItem.Content>
              <ListItem.Title>abc</ListItem.Title>
              <ListItem.Subtitle>def</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </ListItem.Accordion>
        
   </View>
   );
 };
 
 export default PantryPage;