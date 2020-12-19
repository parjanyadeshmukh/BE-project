
import React,{useState,useEffect} from "react";
import{
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Tab1 from './screens/tabs/tab1';
// import Tab2 from './screens/tabs/tab2';
import { DrawerContent }  from './screens/DrawerContent';
// import DataFetching from './screens/DataFetching';
import{
  Provider,
  Avatar,
  Title,Caption,
  Paragraph,Switch
} from 'react-native-paper';
import BookmarkScreen from './screens/BookmarkScreen';
import MeetingscheduleScreen from './screens/MeetingscheduleScreen';
import screenNames from './screens/screenNames';
import HomeScreenLogin from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
import {  isEmpty,  } from 'lodash';
import {getUserDetails} from './screens/helper'



const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();
const AuthStack=createStackNavigator();



const App=()=>{
 return(
      <NavigationContainer>

<Drawer.Navigator drawerContent ={props => <DrawerContent { ...props} />} >
<Drawer.Screen name="Home page" component={HomeScreenLogin} />
      <Drawer.Screen name="Sign up" component={SignupScreen}/>
<Drawer.Screen name="HomeScreen" component={HomeScreen} 
     />
      <Drawer.Screen name= {screenNames.MEETING_BOOKMARKS} component={BookmarkScreen} />
       <Drawer.Screen name={screenNames.SCHEDULE_MEETINGS} component={MeetingscheduleScreen} />
      
     
  </Drawer.Navigator>
        
       </NavigationContainer>

  )
}







export default App;
