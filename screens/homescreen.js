import React,{useState,useEffect} from "react";
import{
  StyleSheet,Text,View,Button,ScrollView,FlatList, ActionSheetIOS
} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import VisitorCard  from "./VisitorCard";

// import newAPI from './fetchapi';




const HomeScreen=()=>{
  

    

    return( 
      // <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={styles.text1} >Visitor Management System</Text>
          <Text style={styles.text2}>Visitor Meeting Schedule</Text>
          
        </View>
        <View></View>
         <View>
            {/* <FlatList data={post.data}
            keyExtractor={(item,index) => 'key' + index }
            renderItem = {({item}) => {
              return <VisitorCard item ={item} />
            }}
            /> */}
  
        </View>
      </View>
    );
  };

  const styles=StyleSheet.create(
    {
      container:{
        flex:1,
        backgroundColor:'#fff',
        // flexDirection:"row",
        // justifyContent:"center",
      },
      text:{
        fontSize:20,
        paddingTop:30,
        fontWeight:'bold',
        width:400,
        textAlign:"center",
        fontFamily:"sans-serif-light",
        color :"#fffff4"
      },
      text1:{
        fontSize:25,
        paddingTop:15,
        fontWeight:'bold',
        width:400,
        textAlign:"center",
        color :"#fffff4",
        paddingBottom:50
      },
      container1:{
        flex:1,
        backgroundColor:'#455a64'
        
      },
      scrollView: {
        backgroundColor: '#fff',
        // marginHorizontal: 10,
      },
      text2:{
        fontSize:22,
        paddingBottom:15,
        paddingTop:20,
        fontWeight:'bold',
        // width:400,
        textAlign:"center",
        // fontFamily:"sans-serif-light",
        color :"#fffff4",
        backgroundColor:'#455a64',
        borderWidth:5,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"#fffff4",
        borderTopColor:"#fffff4",
       
      },
    }
  );

  export default HomeScreen;