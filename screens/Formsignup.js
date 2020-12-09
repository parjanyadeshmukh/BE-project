// import React, {Component} from 'react';

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// export default class Form extends Component<{}>
export default function Formsignup(props)
{
  //  render() {
        return(
            <View style = {styles.container}>
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Employee ID"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="First Name"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Last Name"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email ID"
                    returnKeyType="next"
                    placeholderTextColor="#000000"
                />
                <TextInput style = {styles.inputbox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    returnKeyType="go"
                    secureTextEntry={true}
                    placeholderTextColor="#000000"
                />

                <TouchableOpacity 
                style = {styles.button}
                onPress = {() => {props.navigation.navigate("HomeScreen")}}    >
                    <Text style ={styles.buttontext}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
  //   }
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
