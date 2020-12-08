import React from "react";
import{
  StyleSheet,Text,View,Button
} from "react-native";
import 'react-native-gesture-handler';


const BookmarkScreen=()=>{ 
    return(
      <View style={styles.container}>
        <Text style={styles.text1}>
        List Of Meetings Scheduled
        </Text>
      </View>
    )
    };
  
  export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    text1:{
      fontSize:35,
      fontWeight:'bold',
      color:'#455a64',
      textAlign:'center',
      padding:10,
      fontFamily:"sans-serif",
      borderColor:'#455a64',
      borderWidth:7,
      
    }
})
  
 