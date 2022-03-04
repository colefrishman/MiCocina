import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartPage from "./StartPage";
import AddItem from"./AddItem";
import PantryPage from "./PantryPage";
import GroceryPage from "./GroceryPage";
import ExpirationPage from "./ExpirationPage";

const Tab = createBottomTabNavigator();

/*<Tab.Screen name = 'Expiration' component={ExpirationPage} />*/

const BottomTabs = () => {

    return(
        <Tab.Navigator >
            <Tab.Screen name = 'Home' component={StartPage} />
            <Tab.Screen name = 'Pantry' component={PantryPage} />
            <Tab.Screen name = 'Grocery' component={GroceryPage} />
            <Tab.Screen name = 'Add Item' component={AddItem} />
        </Tab.Navigator>
    )

}
export default BottomTabs;