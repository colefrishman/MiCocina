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
        {id:0, itemName:'bananas', category:'Produce', pantry_qty: 3, grocery_qty: 0},
        {id:1, itemName:'apples', category:'Produce', pantry_qty: 10, grocery_qty: 0},
        {id:2, itemName:'orange juice', category: 'Drinks', pantry_qty: 2, grocery_qty: 0},
        {id:3, itemName:'cheese', category: 'Dairy', pantry_qty: 0, grocery_qty: 1},
        {id:4, itemName:'cereal', category: 'Dried Goods', pantry_qty: 0, grocery_qty: 10},
        {id:5, itemName:'bread', category: 'Bread/Bakery', pantry_qty: 4, grocery_qty: 0},
        {id:6, itemName:'grapes', category: 'Produce', pantry_qty: 2, grocery_qty: 0},
        {id:7, itemName:'beans', category: 'Canned Good', pantry_qty: 0, grocery_qty: 12},
        {id:8, itemName:'tomato sauce', category: 'Canned Good', pantry_qty: 7, grocery_qty: 0},
        {id:9, itemName:'gatorade', category: 'Drinks', pantry_qty: 0, grocery_qty: 5},
        {id:10, itemName:'bagels', category: 'Bread/Bakery', pantry_qty: 5, grocery_qty: 0},
        {id:11, itemName:'salmon', category: 'Meat/Seafood', pantry_qty: 0, grocery_qty: 3},
        {id:12, itemName:'toothpaste', category: 'Uncategorized', pantry_qty: 3, grocery_qty: 0},
        {id:13, itemName:'waffles', category: 'Frozen Food', pantry_qty: 5, grocery_qty: 0},
        {id:14, itemName:'pizza', category: 'Frozen Food', pantry_qty: 0, grocery_qty: 2},
        {id:15, itemName:'lettuce', category: 'Produce', pantry_qty: 4, grocery_qty: 0},
        {id:16, itemName:'cucumbers', category: 'Produce', pantry_qty: 3, grocery_qty: 0},
        {id:17, itemName:'broccoli', category: 'Produce', pantry_qty: 5, grocery_qty: 0},
        {id:18, itemName:'potatoes', category: 'Produce', pantry_qty: 14, grocery_qty: 0},
        {id:19, itemName:'yogurt', category: 'Dairy', pantry_qty: 1, grocery_qty: 0},
        {id:20, itemName:'cookies', category: 'Uncategorized', pantry_qty: 7, grocery_qty: 0},
        {id:21, itemName:'popcorn', category: 'Uncategorized', pantry_qty: 0, grocery_qty: 3},
        {id:22, itemName:'corn', category: 'Produce', pantry_qty: 4, grocery_qty: 0},
        {id:23, itemName:'butter', category: 'Dairy', pantry_qty: 0, grocery_qty: 3},
        {id:24, itemName:'granola bars', category: 'Uncategorized', pantry_qty: 0, grocery_qty: 1}
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