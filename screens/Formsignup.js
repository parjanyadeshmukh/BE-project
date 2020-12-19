

import axios from 'axios';
import React,{useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {BASE_URL } from './helper';
import {emailRegex} from './helper';

export default function Formsignup(props)
{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[reenterpassword,setReenterpassword]=useState('');
    const [message,setMessage] = useState('')
    const displaymessages={
        success:'Sign-Up successful',
        failure:'You are already a user',
        passwordmismatch:'Passwords do not match or password must be 6 characters',
        validEmail:'Please enter a valid email address',
    } 
    
    const signUpApi=async()=>{
        const payload={
            'name':name,
            'email':email,
            'password':password,
            'reenterpassword':reenterpassword
        }
       
        try{
         const res=await axios.post(`${BASE_URL}/signup`,payload)
            // console.log(res.status,'res')
           return res
        }
        catch(err){
            return err
        }

    }
    const signUp=async()=>{
        
        if ((password===reenterpassword) && password.length>6 ){

            if(!emailRegex.test(email))
            {
                setMessage(displaymessages.validEmail)
            }
            else
            {
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
                    placeholderTextColor="white"
                    autoCapitalize="none"

                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    returnKeyType="next"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    value={reenterpassword}
                    onChangeText={setReenterpassword}
                    placeholder="Re-enter Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                />
                
                <TouchableOpacity 
                style = {styles.button}
                onPress = {signUp}   
                 >
                    <Text style ={styles.buttontext}>Signup</Text>
                </TouchableOpacity>
                {message?<Text style ={styles.text}>{message}</Text>:null}

            </View>
        )
  
}

const styles = StyleSheet.create({
    container : {
    //   flexGrow: 1,
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
        marginVertical : 10,
        color:"white"
    },

    button : {
        width : 100,
        backgroundColor : '#fff3e2',
        borderRadius : 8,
        alignSelf:'center',
        marginTop:15,
        paddingVertical:6
    },

    buttontext : {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'black',
        textAlign : 'center'
    },
    text:{
        color : 'rgba(255,255,255,0.6)',
        textAlign:'center',
        paddingTop:8,
        fontSize:11
    }
});
