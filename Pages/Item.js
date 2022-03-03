import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    itemLeft:{
        flexDirection : 'row',
        alignItems: 'center',
        flexWrap : 'nowrap',

    },
    itemText : {
        maxWidth : '80%',
    },
    circle: {
        width : 12,
        height : 12,
        borderColor : '#85C285', 
        borderWidth: 2,
        borderRadius: 5,
    },
    items : {
        backgroundColor :  '#FFF',
        padding : 15, 
        borderRadius : 10,
        flexDirection : 'row',
        alignItems: 'center' ,
        justifyContent: 'space-between',
        marginBottom: 20,
    }
})
const Items = (props) => {
    return (
        <View style = {styles.items}>
            <View style = { styles.itemLeft}>
                 <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circle}></View>
           
        </View>
    )
}

export default Items;