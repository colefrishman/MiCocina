import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native'
import { AntDesign } from "@expo/vector-icons";

const SearchComponent = ({onSearchEnter}) => {
    const [term, setTerm] = useState("");
    return(
        <View style={styles.searchBox}>
        <AntDesign name="search1" size={18} color="black" style={styles.icon}/>
        <TextInput 
            placeholder= "Search for item"
            placeholderTextColor= "black"
            value={term}
            style= {styles}
            onChangeText= {(newText) => {
                setTerm(newText);
            }}
            onEndEditing= {() => {
                onSearchEnter(term);
            }}
        />
        <TouchableOpacity onPress={() => {
          setTerm("");
          onSearchEnter("");
        }}>
            <AntDesign name="closecircle" size={18} color="black" style={styles.icon} />
        </TouchableOpacity>
        
        </View>
    );


};

const styles= StyleSheet.create({
    searchBox: {
        backgroundColor: '#fff',
        borderColor : '#9FD4AB',
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      icon: {
        marginTop: 10,
        marginHorizontal: 8,
      },
      searchText: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 0,
        margin: 0,
        color: "black",
      },
});
export default SearchComponent;