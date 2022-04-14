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
import SearchComponent from '../components/SearchComponent';


const GroceryPage = (props) =>{
    //text box info
    const [textInput, setTextInput] = useState("");

    const [sort, setSort] = useState(0);
    const [sortDirection, setSortDirection] = useState(false);
  
    const [term, setTerm] = useState("");

    // default items
    let items = props.items;
    let setItems = props.setItems;

    //asynch storage 

    // useEffect( () => {
    //     getItemList();
    // }, []);

    // useEffect(() => {
    //     saveItem(items);
    // }, [items]);
    
    // const saveItem = async items =>{
    //     try{
    //         const stringifyItems= JSON.stringify(items);
    //         await AsyncStorage.setItem('items', stringifyItems);
    //     } catch(e){
    //         console.log(e);
    //         //error
    //     }
    // }

    // const getItemList = async () => {
    //     try {
    //         const items =await AsyncStorage.getItem('items');
    //         if(items != null){
    //             setItems(JSON.parse(items));
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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
            itemID ==item.id ? {...item, grocery_qty:item.grocery_qty - 1 } : item)
        )
    };

    //increment
    const incrementQuantity = itemID=> {
        setItems(items=>
            items.map((item) =>
            itemID ==item.id ? {...item, grocery_qty:item.grocery_qty + 1 } : item)
        )
    };


    // list container
    const ListItem = ({item}) =>{
        
        if(item.grocery_qty<=0){
            return <></>
        }

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
                    <MenuOption value = "Dairy" text="Dairy"/>
                    <MenuOption value = "Deli" text="Deli"/>
                    <MenuOption value = "Bread/Bakery" text="Bread/Bakery"/>
                    <MenuOption value = "Frozen Food" text="Frozen Food"/>
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
                onPress={() =>deleteID(item?.id, item?.itemName, item?.category, item?.grocery_qty)}
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
            grocery_qty: 1,
            pantry_qty: 0,
            category: "Uncategorized"
        };
        setItems([...items, newItem]);
        setTextInput("");
    };

    const addToPantry = (itemN,itemCat, quant) => {
        const newItem = {
            id:Math.random(),
            itemName : itemN,
            pantry_qty: quant,
            grocery_qty: 0,
            category: itemCat
        };
        setItems([...items, newItem]);
    }

    //delete item
    const deleteID = (itemID,itemN,itemCat,quant) => {
        const newItems = items.filter(item=>item.id != itemID);
        setItems(items=>
            items.map((item) =>
            itemID ==item.id ? {...item, pantry_qty:item.grocery_qty, grocery_qty:0 } : item)
        )
    }

    //delete entire list
    const clearGroceryList = ()=>{
        Alert.alert("Confirm", "Clear entire grocery list?",[
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
                <Text style= {styles.headingText}>GROCERY LIST</Text>
                <Menu onSelect={(value) => sortItems(value)}>
                    <MenuTrigger>
                        <MaterialCommunityIcons name="sort" size={24} color="black" marginLeft={30}/>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption value = {0}  text="Sort by id"/>
                        <MenuOption value = {1}  text="Sort by alphabetical"/>
                        <MenuOption value = {2}  text="Sort by category"/>
                        <MenuOption value = {3}  text="Sort by quantity"/>
                    </MenuOptions>
                </Menu>
                <TouchableOpacity onPress={clearGroceryList}>
                    <Entypo name="trash" size={24} color="black" paddingHorizontal={20}/>
                </TouchableOpacity>
            </View>
            <SearchComponent onSearchEnter={(newTerm) => {setTerm(newTerm)}} />
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
        paddingRight: 50,
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


export default GroceryPage;

