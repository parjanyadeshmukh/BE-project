
import React,{useState} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';



export default function Form(props)
{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    // const submitCred=() =>{


    // }
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    value={email}
                    onChangeText={setEmail}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = "Email ID"
                    placeholderTextColor = "#000000"
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
                    secureTextEntry={true}

                    placeholderTextColor="#000000"
                />

                <TouchableOpacity 
                    style = {styles.button}
                    // onPress = {submitCred} 
                      >
                    <Text style ={styles.buttontext} >Login</Text>
                </TouchableOpacity>
                
            </View>
         )
 //     }
}

const styles = StyleSheet.create({
    container : {
        marginVertical : 10,
        flexGrow: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputbox : {
        width : 300,
        backgroundColor : 'rgba(255, 255, 255, 0.3)',
        borderRadius : 25,
        paddingHorizontal : 20,
        color : "#000000",
        fontSize : 17,
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

