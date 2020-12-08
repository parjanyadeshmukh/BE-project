import React,{useState,useEffect} from "react";
import axios from 'axios';
import{
  StyleSheet,Text,View,Button,TouchableOpacity,TextInput
} from "react-native";



export default axios.create({
    baseURL:"https://us7.admin.mailchimp.com/"
  })
  