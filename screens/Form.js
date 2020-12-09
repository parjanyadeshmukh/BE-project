//  import React, {Component} from 'react';
import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
// import { } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
//import Login from '../pages/Login';
//import Signup from '../pages/Signup';

//  export default class  extends Component<{}>
export default function Form(props)
{
    // const { navigation } = props
 //     render() {
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder = "Email ID"
                    placeholderTextColor = "#000000"
                    returnKeyType = "next"
 //                   onSubmitEditing = {() => this.passwordInput.focus() }
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                   
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    returnKeyType = "go"
                    secureTextEntry={true}
 //                   ref = {(input) => this.passwordInput =input }
                    placeholderTextColor="#000000"
                />

                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() => {props.navigation.navigate("HomeScreen")}}   >
                    <Text style ={styles.buttontext}>Login</Text>
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

