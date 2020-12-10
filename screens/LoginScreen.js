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
    
     return(
       <View style={styles.container}>
       
             <Image style = {{width:90, height:80}}
                source = {require('./logo.png')} />
            <Text style = {styles.logoText}>Visitor Management System</Text>

        <Form navigation={navigation}/>

       {/* <Login/> */}
         {/* <StatusBar
          backgroundColor="#1c313a" 
          barStyle="light-content"
         /> */}

         <View style = {styles.signupTextContent}>
            <Text style = {styles.signuptext}>Don't have an account? </Text>
            <Text style = {styles.signupbutton}
               onPress={() => navigation.navigate("Sign up")}>
                Sign up
              </Text>
         </View>

         {/* <Button style={styles.button1}
           title = "goto signup page"
           onPress={() => navigation.navigate("Sign up")}  
         /> */}
       </View>
    );
   // }
 }


 const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
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
      color : 'rgba(255, 255, 255, 0.7)'
    },
  
    signupTextContent : {
      flexGrow : 1,
      fontSize : 18,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical : 90,
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
    }
  
  });

  export default HomeScreenLogin