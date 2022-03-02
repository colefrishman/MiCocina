import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartPage from "./StartPage";
import PantryPage from "./PantryPage";
//import FridgePage from "./FridgePage";

import GroceryPage from "./GroceryPage";
import AddItem from"./AddItem";
import ExpirationPage from "./ExpirationPage";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();



const BottomTabs = () => {
    return(
        <Tab.Navigator
            screenOptions= {({route}) => ({
                headerStyle: { backgroundColor: '#c4ffc9' },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: '#c4ffc9',
                tabBarInactiveBackgroundColor: '#c4ffc9',
                tabBarShowLabel: true,
                tabBarIcon: ({focused}) => {
                    let iconName;
                    if(route.name === 'Home') {
                        iconName = 'home';
                    }
                    else if(route.name === 'Grocery') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }
                    else if(route.name === 'Add Item') {
                        iconName = focused ? 'hourglass' : 'hourglass-outline';
                    }
                    else if(route.name === 'Pantry') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return(
                        <Ionicons
                        name = {iconName}
                        size = {32}
                        />
                    )
                },
                tabBarOptions: {
                   showIcon: true
                },
            })}
        >
            <Tab.Screen name = 'Home' component={StartPage} />
            <Tab.Screen name = 'Pantry' component={PantryPage} />
            <Tab.Screen name = 'Grocery' component={GroceryPage} />
            <Tab.Screen name = 'Add Item' component={AddItem} />
        </Tab.Navigator>
    )

}
export default BottomTabs;


