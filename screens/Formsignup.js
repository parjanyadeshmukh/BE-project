

import axios from 'axios';
import React,{useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default function Formsignup(props)
{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[reenterpassword,setReenterpassword]=useState('');
    
    const displaymessages={
        success:'Sign-Up successful',
        failure:'You are already a user',
        passwordmismatch:'Passwords do not match'
    } 
    const{setMessage}=props
    const signUpApi=async()=>{
        const payload={
            'name':name,
            'email':email,
            'password':password,
            'reenterpassword':reenterpassword
        }
       
        try{
         const res=await axios.post("http://192.168.43.139:3000/signup",payload)
            // console.log(res.status,'res')
           return res
        }
        catch(err){
            return err
        }

    }
    const signUp=async()=>{
        if (password===reenterpassword){

       
        const response=await signUpApi()
        if(response.status===200)
           {
               setMessage(displaymessages.success)
               setName('');
               setEmail('');
               setPassword('');
               setReenterpassword('');
           }
           else{
               
               setMessage(displaymessages.failure)
           }
        }
        else{
            setMessage(displaymessages.passwordmismatch)
        }

    }
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={name}
                    onChangeText={setName}
                    placeholder="Full Name"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={reenterpassword}
                    onChangeText={setReenterpassword}
                    placeholder="Re-enter Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                
                <TouchableOpacity 
                style = {styles.button}
                onPress = {signUp}   
                 >
                    <Text style ={styles.buttontext}>Signup</Text>
                </TouchableOpacity>
                

            </View>
        )
  
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    inputbox : {
        width : 300,
        backgroundColor : 'rgba(255, 255, 255, 0.3)',
        borderRadius : 25,
        paddingHorizontal : 20,
        color : "#000000",
        fontSize : 16,
        marginVertical : 10
    },

    button : {
        width : 150,
        backgroundColor : '#1c313a',
        borderRadius : 25,
        marginVertical : 10,
        paddingVertical : 13
    },

    buttontext : {
        fontSize : 16,
        fontWeight : '500',
        color : '#ffffff',
        textAlign : 'center'
    }
});
