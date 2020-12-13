
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


// const getStackscreens=(empdata)=> {
//   if(isEmpty(empdata)){
//     return(

    
//       <Stack.Screen name="Auth" component={AuthStackScreen} />
//   )}
//   else{
//     return(
//     <Stack.Screen name= {screenNames.HOME} component={HomeStackScreen} />
//     )}
 
// }

const AuthStackScreen =()=>{
  return(
  <AuthStack.Navigator screenOptions={{headerShown:false}}>
    <AuthStack.Screen name="Home page" component={HomeScreenLogin} />
      <AuthStack.Screen name="Sign up" component={SignupScreen} />
      {/* <AuthStack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <AuthStack.Screen name={screenNames.HOME} component={HomeStackScreen} />
  </AuthStack.Navigator>
)}

 

// const HomeStackScreen=({navigation})=>(
//   <Drawer.Navigator drawerContent ={props => <DrawerContent { ...props} />} >
// <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerLeft:()=>(
//         <Icon.Button name="ios-menu" size={25}
//             backgroundColor="#455a64" onPress={() => {
//         return navigation.openDrawer();
//         }}>        
//         </Icon.Button>
//     )
//      }} />
//       <Drawer.Screen name= {screenNames.MEETING_BOOKMARKS} component={BookmarkScreen} />
//        <Drawer.Screen name={screenNames.SCHEDULE_MEETINGS} component={MeetingscheduleScreen} />
//        <Drawer.Screen name="auth" component={AuthStackScreen} />
     
//   </Drawer.Navigator>
// )





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
       
       {/* <Drawer.Screen name="auth" component={AuthStackScreen} /> */}
     
  </Drawer.Navigator>
        {/* <Stack.Navigator screenOptions={{headerShown:false}}  >
        <Stack.Screen name = "auth" component={AuthStackScreen}/>
        <Stack.Screen name = {screenNames.HOME} component={HomeStackScreen}/>

      
         
           
         </Stack.Navigator> */}
       </NavigationContainer>

  )
}







export default App;
