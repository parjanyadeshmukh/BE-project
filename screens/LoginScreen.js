import React,{useState} from "react";
import{
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import Form from './Form';


const HomeScreenLogin = ({navigation}) =>
  { 
    const signup = ()=>{
      navigation.navigate("Sign up")
    }
    
     return(
       <View style={styles.container}>
    
             <Image style = {{width:90, height:80}}
                source = {require('./logo.png')} />
            <Text style = {styles.logoText}>Visitor Management System</Text>

        <Form navigation={navigation}/>
        <View style = {{flexDirection:'row', marginTop:22}}>
        <Text style = {styles.text}>Don't have an account ?</Text>
          <TouchableOpacity onPress={signup}>
<Text style = {styles.text1}>Sign up </Text>
          </TouchableOpacity>
        </View>
       </View>
    );
   // }
 }


 const styles = StyleSheet.create({
    container : {
  
      backgroundColor: '#1f6f8b',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    button1 : {
      paddingBottom : 80
    },
  
    logoText : {
      // marginVertical : 1,
      
      fontSize : 16,
      color : 'rgba(255, 255, 255, 0.9)',
      
    },
  
    signupTextContent : {
      
      fontSize : 18,
      alignItems: 'flex-end',
      justifyContent: 'center',
      // 
      flexDirection : 'row'
    },
  
    signuptext : {
      fontSize : 13,
      color : 'rgba(255,255,255,0.6)',
      alignItems: 'center'
    },
  
    signupbutton : {
      color : '#ffffff',
      fontSize : 13,
     fontWeight : '500'
    },
    text:{
      color:'white',
    },
    text1:{
      color:'#f9f7cf',
      paddingHorizontal:3
    }
  });

  export default HomeScreenLogin