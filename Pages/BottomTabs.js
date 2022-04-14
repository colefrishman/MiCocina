import React, {useState} from "react";
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
    const [items, setItems] = useState([
        {id:0, itemName:'bananas', category:'Produce', pantry_qty: 1, grocery_qty: 0},
        {id:1, itemName:'apples', category:'Produce', pantry_qty: 1, grocery_qty: 0},
        {id:2, itemName:'orange juice', category: 'Drinks', pantry_qty: 2, grocery_qty: 0},
        {id:3, itemName:'cheese', category: 'Dairy', pantry_qty: 0, grocery_qty: 1},
        {id:4, itemName:'cereal', category: 'Dried Goods', pantry_qty: 0, grocery_qty: 10}
    ])

    return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name = 'Home'     children={() => <StartPage items={items} setItems={setItems} />} options = {{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name = 'Pantry'   children={() => <PantryPage items={items} setItems={setItems} />}  options = {{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="food-variant" size={24} color="black" />
                )
            }}/>
            <Tab.Screen name = 'Grocery' children={() => <GroceryPage items={items} setItems={setItems} />} options = {{
                tabBarIcon: () => (
                    <AntDesign name="shoppingcart" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    )

}
export default BottomTabs;