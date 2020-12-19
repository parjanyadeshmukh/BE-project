import React,{useState} from "react";
import{
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import Formsignup from './Formsignup';


const SignupScreen = ({navigation}) =>
  {
    const[message,setMessage]=useState('');
    
     return(
       <View style={styles.container}>
      
             <Image style = {{width:90, height:80}}
                source = {require('./logo.png')} />
            <Text style = {styles.logoText}>Visitor Management System</Text>
        <Formsignup navigation={navigation}
            setMessage={setMessage}
        />

         <View style = {{flexDirection:'row', marginTop:22}}></View>
         <View style = {styles.signupTextContent}>
         {message?<Text style={styles.signuptext}>{message}</Text>:null}
            <Text 
                style = {styles.signupbutton}
                onPress={() => navigation.goBack()} >
                  Log In
            </Text>
         </View> 
         
       </View>
    );
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
      marginVertical : 1,
      fontSize : 18,
      color : 'rgba(255, 255, 255, 0.9)',
      
    },
  
    signupTextContent : {
     
      fontSize : 20,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection : 'row'
    },
  
    signuptext : {
      fontSize : 15,
      color : 'rgba(255,255,255,0.6)',
      alignItems: 'center'
    },
  
    signupbutton : {
      color : '#ffffff',
      fontSize : 15,
     
   
    }
  
  });

  export default SignupScreen;