import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartPage from "./StartPage";
import AddItem from"./AddItem";
import PantryPage from "./PantryPage";
import GroceryPage from "./GroceryPage";
import ExpirationPage from "./ExpirationPage";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/*<Tab.Screen name = 'Expiration' component={ExpirationPage} />*/

const BottomTabs = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name = 'Home' component={StartPage} options = {{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name = 'Pantry' component={PantryPage}  options = {{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="food-variant" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name = 'Grocery' component={GroceryPage} options = {{
                tabBarIcon: () => (
                    <AntDesign name="shoppingcart" size={24} color="black" />
                )
            }} />
            <Tab.Screen name = 'Add Item' component={AddItem} options = {{
                tabBarIcon: () => (
                    <Entypo name="add-to-list" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    )

}
export default BottomTabs;