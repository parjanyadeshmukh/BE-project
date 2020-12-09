
import React from "react";
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
import screenNames from './screens/screenNames'

// Yojal's important imports
import Form from './screens/Form';
import Formsignup from './screens/Formsignup';


const HomeStack=createStackNavigator();
const Drawer=createDrawerNavigator();


//Yojal's functions
const HomeScreenLogin = ({navigation}) =>
  {
     return(
       <View style={styles.container}>
       {/* <Logo/> */}
             <Image style = {{width:90, height:80}}
                source = {require('./screens/logo.png')} />
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


 const SignupScreen = ({navigation}) =>
  {
     return(
       <View style={styles.container}>
       {/* <Signup/> */}
        {/* <Logo/> */}
             <Image style = {{width:90, height:80}}
                source = {require('./screens/logo.png')} />
            <Text style = {styles.logoText}>Visitor Management System</Text>
        <Formsignup navigation={navigation}/>
         {/* <StatusBar
          backgroundColor="#1c313a" 
          barStyle="light-content"
         /> */}
         <View style = {styles.signupTextContent}>
            <Text style = {styles.signuptext}>Already have an account? </Text>
            <Text 
                style = {styles.signupbutton}
                onPress={() => navigation.goBack()} >
                  Sign in
            </Text>
         </View> 
         
       </View>
    );
 }


const HomeStackScreen=({navigation})=>(
  <HomeStack.Navigator >

      <HomeStack.Screen name="Home page" component={HomeScreenLogin} />
      <HomeStack.Screen name="Sign up" component={SignupScreen} />

      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerLeft:()=>(
        <Icon.Button name="ios-menu" size={25}
            backgroundColor="#455a64" onPress={() => {
        return navigation.openDrawer();
        }}>        
        </Icon.Button>
    )
     }} />
     {/* <HomeStack.Screen name="Toptabs" component={TopTab}  /> */}
  </HomeStack.Navigator>
)





const App=()=>{
  return(
      <NavigationContainer>
        <Drawer.Navigator drawerContent ={props => <DrawerContent { ...props} />}  >
            <Drawer.Screen name= {screenNames.HOME} component={HomeStackScreen} />
            <Drawer.Screen name= {screenNames.MEETING_BOOKMARKS} component={BookmarkScreen} />
            <Drawer.Screen name={screenNames.SCHEDULE_MEETINGS} component={MeetingscheduleScreen} />
         </Drawer.Navigator>
       </NavigationContainer>

  )
}



//Yojal's CSS
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
    fontSize : 18,
    color : 'rgba(255,255,255,0.6)',
    alignItems: 'center'
  },

  signupbutton : {
    color : '#ffffff',
    fontSize : 18,
   fontWeight : '500'
  }

});



export default App;
