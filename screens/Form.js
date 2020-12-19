
import React,{useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {emailRegex} from './helper';
import axios from 'axios';
import { get } from 'lodash';
import {setUserDetailsInStorage,BASE_URL } from './helper';
import screenNames from './screenNames';


export default function Form(props)
{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
    const displayMessages={
        validEmail:'Please enter a valid email address',
        validPassword:'Password should be atleast 6 characters',
        incorrectmailorPassword:'Incorrect email or password'
    }
    const {navigation}=props
    
      

        const loginAPi = async()=>{
            const payload={
                'email':email,
               'password': password
            }
            try {
                const res = await axios.post(`${BASE_URL}/login`,payload)
               
                return res
            }
            catch(err){
                return err
            }
        }


   
    const submitCred=async()=>{
        if(email && !emailRegex.test(email)){

            setMessage(displayMessages.validEmail)
        }
        if(password && password.length<6){
            setMessage(displayMessages.validPassword)
        }
        else
        {
            const response=await loginAPi()
            // console.log(JSON.stringify(response))
            console.log(response.data,'res-login')
            const isSuccess = get(response, 'data.succes','');
            if(isSuccess){
               if(message) setMessage('')
             navigation.navigate("HomeScreen",{
                 empdata:response.data
             })
            
             setEmail('');
             setPassword('');
    
            }
            else
            {
                setMessage(displayMessages.incorrectmailorPassword)
            }
        }
    }
    const setUser=async(empdata)=>{
        const stringifiedData=JSON.stringify(empdata)
        await setUserDetailsInStorage(stringifiedData);
        
      }
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    value={email}
                    onChangeText={setEmail}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = "Email ID"
                    placeholderTextColor = "white"
                    returnKeyType = "next"
                    
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                   
                />
                <TextInput style = {styles.inputbox}
                    value={password}
                    onChangeText={setPassword}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    returnKeyType = "go"
                    secureTextEntry

                    placeholderTextColor="white"
                />

                <TouchableOpacity 
                    style = {styles.button}
                     onPress = {submitCred} 
                      >
                    <Text style ={styles.buttontext} >Login</Text>
                </TouchableOpacity>
                {message? <Text style ={styles.text}>{message}</Text>:null}
                
            </View>
         )
 //     }
}

const styles = StyleSheet.create({
    // container : {
       
       
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },

    inputbox : {
        width : 300,
        backgroundColor : 'rgba(255, 255, 255, 0.3)',
        borderRadius : 25,
        paddingHorizontal : 20,
        color:"white",
        fontSize : 17,
        marginVertical : 10
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
        fontWeight : '500',
        color : '#000000',
        textAlign : 'center',
        fontWeight:'bold'
    },
    text:{
            color : 'rgba(255,255,255,0.6)',
            textAlign:'center',
            paddingTop:8,
            fontSize:11
        }
    
});

