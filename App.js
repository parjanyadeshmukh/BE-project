
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
import screenNames from './screens/screenNames';
import HomeScreenLogin from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen'
// Yojal's important imports




const HomeStack=createStackNavigator();
const Drawer=createDrawerNavigator();


//Yojal's functions



 

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



export default App;
