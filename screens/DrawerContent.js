import React,{useEffect,useState} from "react";
import{
  StyleSheet,View,Button,Text
} from "react-native";
import{
    Provider,
    Avatar,
    Title,Caption,
    Paragraph,Drawer,Switch
} from 'react-native-paper';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import screenNames from './screenNames';
import {getUserDetails,clearAsyncStorage,BASE_URL } from './helper';
import axios from 'axios';


export function DrawerContent (props){
    const { navigation } = props
    const[data,setData]=useState({})
    useEffect(()=>{
        getUserData();
    },[data])
    const getUserData=async()=>{
        const employeedata=await getUserDetails();
        
        setData(JSON.parse(employeedata))
        
        
    }
    const handleLogoutAPI = async()=>{
        const payload={
            empid:data.empid
        }
        try {
            const res = await axios.post(`${BASE_URL}/logout`,payload)
           
            return res
        }
        catch(err){
            return err
        }

    }
    const handleLogout =async()=>{
        const response = await handleLogoutAPI()
        console.log(response.data,'response-handle-logout')
        if(response && response.data && response.data.succes )
        {
  navigation.navigate('Home page')
        }
    
    //   navigation.navigate('auth')
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}> 
            <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                   {/* <View style={{flexDirection:'row', marginTop:15}}>
                       <Avatar.Image
                        source={require('.\employeeicon.png')}
                        size={60}
                       />
                   </View> */}
                   <View style={{marginLeft:15 ,flexDirection:'column'}}>
                       {/* <Title style={styles.title} >Parjanya</Title> */}
                       { data && data.empname? <Title style = {styles.title}>{data.empname}</Title>:null}
                       <Caption style={styles.caption}>Employee_Id :</Caption>
                       {data && data.empid? <Caption style = {styles.caption}>{data.empid}</Caption>:null}
                   </View>
               </View>
            </View>
                <Drawer.Section style={styles.drawerSection}>
                   <DrawerItem
                    icon={({color,size}) => (
                        <Icon 
                        name="account-outline"
                        color={color}
                        size={size}
                        />                 
                    )}
                    label= "Profile"
                    onPress={() => {}}
                    />
                    <DrawerItem
                    icon={({color,size}) => (
                        <Icon 
                        name="bookmark-outline"
                        color={color}
                        size={size}
                        />                 
                    )}
                    label= "Meetings Scheduled"
                    onPress={() =>{navigation.navigate(screenNames.MEETING_BOOKMARKS)}}
                    />
                    <DrawerItem
                    icon={({color,size}) => (
                        <Icon 
                        name="calendar"
                        color={color} 
                        size={size}
                        />                 
                    )}
                    label= "Employee Meetings"
                    onPress={() =>{navigation.navigate(screenNames.SCHEDULE_MEETINGS)}}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon 
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />                 
                    )}
                    label="Sign Out"
                    onPress={handleLogout}
                    />
            </Drawer.Section>
        
        </View>


    )
}

const styles= StyleSheet.create(
    {
        drawerContent:{
            flex:1
        },
        userInfoSection:{
            paddingLeft:20
            
        },
        title:{
            fontSize:15,
            marginTop:3,
            fontWeight:"bold"
           
        },
        caption:{
            fontSize:12,
            lineHeight:14
        },
        row:{
            marginTop:20,
            flexDirection:'row',
            
        },
        section:{
            flexDirection:'row',
            alignItems:'center',
            marginRight:15
        },
        paragraph:{
            fontWeight:'bold',
            marginRight:2
        },
        drawerSection:{
            marginTop:15

        },
        bottomDrawerSection:{
            marginBottom:10,
            borderTopColor:'#455a64',
            borderTopWidth:1
        }
        
    }
);



