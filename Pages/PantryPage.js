/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState,useEffect} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   TextInput,
   TouchableOpacity,
   FlatList,
   Alert,
   Modal,
   Dimensions

   
 } from 'react-native';
 import {  Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
 import { useFonts } from 'expo-font';
 import AppLoading from "expo-app-loading";
 import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
 import AsyncStorage from '@react-native-async-storage/async-storage';
 const { width } = Dimensions.get("window");

 import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

const PantryPage = () =>{
    //text box info
    const [textInput, setTextInput] = useState("");

    const [sort, setSort] = useState(0);
    const [sortDirection, setSortDirection] = useState(false);
    // default items
    const[items, setItems] = useState([
        {id:0, itemName:'bananas', category:'Produce', product_qty: 1},
        {id:1, itemName:'apples', category:'Produce', product_qty: 1},
        {id:2, itemName:'orange juice', category: 'Drinks', product_qty: 1}
    ]);

    //put items in sorted order
    const sortItems = (sort_type) => {
        let temp = [...items]

        const ID = 0;
        const ALPHABETICAL = 1;
        const CATEGORICAL = 2;
        const QUANTITY = 3;

        let sd;
        if(sort==sort_type){
            sd = !sortDirection
        }
        else{
            setSort(sort_type)
            sd = false
        }

        setSortDirection(sd)

        if(sort_type == ID){
            temp.sort((a,b)=>{
                if(a.id>b.id){
                    return 1
                }
                if(a.id<b.id){
                    return -1
                }
                return 0
            })
        }
        if(sort_type == ALPHABETICAL){
            temp.sort((a,b)=>{
                if(a.itemName.toLowerCase() > b.itemName.toLowerCase()){
                    return 1
                }
                if(a.itemName.toLowerCase() < b.itemName.toLowerCase()){
                    return -1
                }
                return 0
            })
        }
        if(sort_type == CATEGORICAL){
            temp.sort((a,b)=>{
                if(a.category.toLowerCase() > b.category.toLowerCase()){
                    return 1
                }
                if(a.category.toLowerCase() < b.category.toLowerCase()){
                    return -1
                }
                return 0
            })
        }
        if(sort_type == QUANTITY){
            temp.sort((a,b)=>{
                if(a.product_qty > b.product_qty){
                    return 1
                }
                if(a.product_qty < b.product_qty){
                    return -1
                }
                return 0
            })
        }
        
        if(sd){   
            temp.reverse()
        }
        setItems(temp)
    }

    //decrement 
    const decrementQuantity = itemID=> {
        setItems(items=>
            items.map((item) =>
            itemID ==item.id ? {...item, product_qty:item.product_qty - 1 } : item)
        )
    };

    //increment
    const incrementQuantity = itemID=> {
        setItems(items=>
            items.map((item) =>
            itemID ==item.id ? {...item, product_qty:item.product_qty + 1 } : item)
        )
    };

    // list container
    const ListItem = ({item}) =>{
        return (
        <View style={styles.itemList}>
            <View style= {{flex:1}}>
                <Text style= {{fontWeight:'bold', fontSize: 15, color:'#000000' }}>{item?.itemName}</Text>
            </View>
            <Menu onSelect={value => {temp = [...items]; temp.find(i => i.id == item.id).category=value; setItems(temp)}}>
                <MenuTrigger text = {item.category} />
                <MenuOptions>
                    <MenuOption value = "Dried Goods"   text="Dried Goods"/>
                    <MenuOption value = "Produce"       text="Produce"/>
                    <MenuOption value = "Uncategorized" text="Uncategorized"/>
                    <MenuOption value = "Drinks" text="Drinks"/>
                </MenuOptions>
            </Menu>
            <TouchableOpacity onPress={() => decrementQuantity(item?.id)}>
                <View style={styles.addButtonSmall}>
                        <Text>-</Text>
                    </View>
            </TouchableOpacity>
                <Text>{item?.product_qty}</Text>
            <TouchableOpacity onPress={() => incrementQuantity(item?.id)}>
                <View style={styles.addButtonSmall}>
                        <Text>+</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.circle}
                onPress={() =>deleteID(item?.id)}
            />
        </View>
        
        );
    };

    //add item to list
    const addItem = ()=>{
        console.log(textInput);
        const newItem = {
            id:Math.random(),
            itemName : textInput,
            product_qty: 1,
            category: "Uncategorized"
        };
        setItems([...items, newItem]);
        setTextInput("");
    };

    //delete item
    const deleteID = itemID => {
        const newItems = items.filter(item=>item.id != itemID);
        setItems(newItems);
      }
    
    //delete entire list
    const clearPantryList = ()=>{
        Alert.alert("Confirm", "Clear entire Pantry?",[
            {
            text: "Yes",
            onPress: ()=>setItems([]),
            },{
                text:"No",
            }
    
        ])
        
    }
 
    //getting font
    let [fontsLoaded] = useFonts({
       Roboto_700Bold,
       Roboto_900Black,
    });

    if(!fontsLoaded){
        return <AppLoading /> ;
    }

    
   
    return (
        <SafeAreaView style= {styles.safeArea}>
            <View style = {styles.header}>
                <Text style= {styles.headingText}>PANTRY LIST</Text>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={clearPantryList}>
                    <Entypo name="trash" size={24} color="black" />
                </TouchableOpacity>
                <Menu onSelect={(value) => sortItems(value)}>
                    <MenuTrigger>
                        <MaterialCommunityIcons name="sort" size={24} color="black" />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value = {0}  text="Sort by id"/>
                        <MenuOption value = {1}  text="Sort by alphabetical"/>
                        <MenuOption value = {2}  text="Sort by category"/>
                        <MenuOption value = {3}  text="Sort by quantity"/>
                    </MenuOptions>
                </Menu>
        
            </View>
        
            <FlatList 
                showsVerticalScrollIndicator= {false}
                contentContainerStyle={{padding:20, paddingBottom:100}}
                data={items} 
                renderItem= {({item})=><ListItem item={item}/>}
            
            />

            <View style={styles.bottomAdd}>
                <View style = {styles.inputBox}> 
                    <TextInput 
                    placeholder="Add an Item" 
                    value = {textInput}
                    onChangeText={text=>setTextInput(text)}/>
                </View>
                <TouchableOpacity onPress={addItem}>
                    <View style={styles.addButton}>
                        <Text>+</Text>
                    </View>
                </TouchableOpacity>
                
                   
            </View>
            

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeArea: {
        flex :1 ,
        backgroundColor : '#fff',
    },
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
    headerButtons:{

    },
    bottomAdd: {
        position: 'absolute', 
        bottom: 0,
        color: '#fff',
        width: '100%',
        flexDirection : 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputText:{

    },

    inputBox: {
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
        marginVertical: 20
  
    },
    addButton: {
        width: 50,
        height: 50,
        borderRadius: 40 ,
        elevation: 40,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#9FD4AB',
        marginHorizontal: 5,
    },
    addButtonSmall: {
        width: 20,
        height: 20,
        borderRadius: 20 ,
        elevation: 40,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor: '#9FD4AB',
        marginHorizontal: 5,
    },
    itemList:{
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 15,
        borderWidth: 1,
        marginVertical: 5,
        borderColor: '#dddddd'
    },
    circle: {
        width : 20,
        height : 20,
        borderColor : '#85C285', 
        borderWidth: 2,
        borderRadius: 20/2,
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft: 20

    },

 
})
 
 export default PantryPage;