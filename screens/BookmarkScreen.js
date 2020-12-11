import React from "react";
import{
  StyleSheet,Text,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView
} from "react-native";
import 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";

import VisitorCard from './VisitorCard';

const {width,height}= Dimensions.get('window')


const BookmarkScreen=()=>
{
  const navigation = useNavigation() 
    return(
      
      <View style={styles.container}>
        <Text style={styles.text1}>
          List Of Meetings Scheduled
        </Text>




      {/* <VisitorCard navigation={navigation}/> */}

      
      <ScrollView>
        <View style={styles.cardView}>
          <SafeAreaView>
           <Text style={styles.title}>Meeting Request</Text>
           <Text style={styles.subtitle}>Name of Visitor :</Text>
           <Text style={styles.subtitle}>Intime :</Text>
           <Text style={styles.subtitle}>Reason of Visit :</Text>
           
            {/* <Text style={styles.subtitle}>{item.id}</Text>
            <Text style={styles.description}>{item.userId}</Text>
            <Text style={styles.description}>{item.title}</Text> */}
      {/* <Text style={styles.subtitle}>Name of Visitor</Text>
      <Text style={styles.description}>abdmmndn</Text>
      <Text style={styles.description}>ksmhflgj</Text> */}
      
          {/* <FlatButton text="Accept" /> */}
          {/* <FlatButton text="Decline"  />  */}
      
          <TouchableOpacity
          style = {styles.button}
          >
            <Text style ={styles.buttontext} >Done</Text>
          </TouchableOpacity>
      
          </SafeAreaView>
      </View>
    </ScrollView>






      <TouchableOpacity
        onPress = {() => {navigation.goBack()}}>
          <Text style = {styles.backbuttontext}>
           Back
          </Text>
      </TouchableOpacity>

      </View>
    )
};
  
  export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
       backgroundColor:'#000000',
      padding:10,
      borderColor:'#a9a9a9',
      borderWidth:0,
    },
    text1:{
      fontSize:35,
      // paddingTop:30,
      fontWeight:'bold',
      color:'#ffffff',
      textAlign:'center',
      padding:10,
      fontFamily:"sans-serif",
     // borderColor:'#455a64',
     borderColor:'#a9a9a9',
     // borderWidth:7,   
      
      borderWidth:7,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"#a9a9a9",
        borderTopColor:"#a9a9a9",
    },

    cardView:{
      backgroundColor:'#fff',
      // backgroundColor:'#dc143c',
      // margin:5,
      // marginHorizontal:5,
      // borderRadius:15,
      shadowColor:'#000',
      shadowOffset:{width:0.5, height:1},
      shadowOpacity:0.5,
      shadowRadius:5,
      alignItems:'center',
      justifyContent: 'center',
      padding:10,
      borderColor:'#455a64',
     // borderWidth:0, 
      // borderLeftWidth:0,
      // borderRightWidth:0,
      // borderBottomColor:"#fffff4",
      // borderTopColor:"#fffff4",
      borderWidth:7,
      borderLeftWidth:0,
      borderRightWidth:0,
     // borderBottomColor:"#dc143c",
     borderBottomColor:"#a9a9a9",
      borderTopColor:"#ffffff",
    },

    title:{
      width:width,
      margin:width*0.05,
      color:'black',
      fontSize:20,
      fontWeight:'bold'
    },

    button : {
      width : 150,
      backgroundColor : '#1c313a',
      borderRadius : 25,
      marginVertical : 10,
      paddingVertical : 13
  },

  backbuttontext : {
    backgroundColor : '#ffffff'
  },

  buttontext : {
    fontSize : 16,
    fontWeight : '500',
    color : '#ffffff',
    textAlign : 'center',
},

subtitle:{
  flexDirection: 'row',
  width:width,
  color:'black',
  margin:width*0.05,
  fontSize:18,
  // paddingBottom:15
}
    

    

})
  
 