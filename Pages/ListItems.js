import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";

import {ItemText, ListView, 
        } from "../assets/appStyles"


const ListItems= (groceryList, setItem) => {
    return (
        <SwipeListView 
            data = {groceryList}
            renderItem = { (data) =>{
                return(
                    <ListView>
                        <>
                        <ItemText>{data.item.itemName}</ItemText>
                        </>
                    </ListView>
                )
            }}
            renderHiddenItem
        />  
    );
}
export default ListItems;