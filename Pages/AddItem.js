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
   TextInput,
   Button,
   useColorScheme,
   View,
 } from 'react-native';
 import {  Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
 import { useFonts } from 'expo-font';
 import AppLoading from "expo-app-loading";

 const AddItem = () => {
   //getting font
    let [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_900Black,
    });

    if(!fontsLoaded){
        return <AppLoading /> ;
    }

   return (
    <ScrollView>
        <SafeAreaView style= {styles.safeArea}>
            <View style={[styles.header]}>
                <Text style = {styles.headingText}>ADD ITEM</Text>
            </View>

            <View>
                <Text style = {styles.formText}>Item Name: </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Press to type...'
                />

                <Text style = {styles.formText}>Quantity: </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Press to type...'
                />

                <Text style = {styles.formText}>Expiration Date: </Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='Press to type...'
                />
            </View>

            <View style = {styles.button}>
                <Button
                    //  Will have an onPress = {}
                    title= "Enter"
                    color= 'clear'
                />
            </View>
        </SafeAreaView>
    </ScrollView>
    
   );
 };

 const styles = StyleSheet.create({
    header: {
        padding:  15,
        paddingLeft: 10,
        paddingRight: 75,
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
    formText: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 15,
        width: '100%',
        fontFamily: 'Roboto_900Black',
    },
    input: {
        elevation: 40,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor : '#9FD4AB',
        borderWidth: 1,
        width: 300,
        bottom:0,
        paddingLeft: 15,
        paddingBottom:15,
        marginVertical: 20,
        marginLeft: 30,
    },
    button: {
        elevation: 40,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor : '#9FD4AB',
        borderWidth: 1,
        width: 200,
        bottom:0,
        paddingLeft: 15,
        paddingBottom:15,
        marginVertical: 20,
        marginLeft: 80,
        backgroundColor: '#9FD4AB',
    }
 });
 
 export default AddItem;