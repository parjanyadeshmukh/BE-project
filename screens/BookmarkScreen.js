import React,{useState,useEffect} from "react";
import{
  StyleSheet,Text,TextInput,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView,FlatList
} from "react-native";
import 'react-native-gesture-handler';
import {useNavigation,useIsFocused} from "@react-navigation/native";
import {getUserDetails,clearAsyncStorage,getAcceptedAppointmentsAPI} from './helper';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import VisitorCard  from "./VisitorCard";

const {width,height}= Dimensions.get('window')



const BookmarkScreen=()=>
{
  const isFocused = useIsFocused()

const[acceptedAppointments,setacceptedAppointments]=useState([])
const [userData,setUserData] = useState({})

useEffect(()=>{
  functionGetUser()
 
},[isFocused])

const functionGetUser = async()=>{
  const employeedata=await getUserDetails();
  setUserData(JSON.parse(employeedata))
  getAcceptedAppointments();
}

const getAcceptedAppointments=async()=>{
 
  const response=await getAcceptedAppointmentsAPI(userData)
    setacceptedAppointments(response.data)
    console.log(response.data,'res-get-acceptedappointments')
}
  const navigation = useNavigation();
    // const {navigation}=props
    return(
      <View style={styles.container}>
      <View style = {{flexDirection:"row", marginTop:15}}>
      <Icon name="menuunfold" onPress={()=>navigation.openDrawer()} size={24} color={'white'} style = {{marginLeft:7, marginTop:3}}/>
      <Text style={{color:'white' , fontSize:20 , fontWeight:'bold' ,marginLeft:30 , width:400 , marginTop:3 }}>Accepted Meetings</Text>
      </View>
      {acceptedAppointments.length>0 ? 
       
       <FlatList data={acceptedAppointments}
       keyExtractor={(item,index) => 'key' + index }
       renderItem = {({item}) => {
         return <VisitorCard item ={item}  fromHomePage={false} employeeData={userData} setacceptedAppointments={setacceptedAppointments} />
       }}
       /> : 
       <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
       <Icon name="exception1"  size={80} color={'white'} />
       <Text style={styles.text2}>No meetings confirmed </Text>
       </View>}
      </View>
    )
};
  
  // export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        backgroundColor:'#1f6f8b' 
        
    },
    text2:{
      color:'white',
      textAlign:'center',
      fontSize:20,
      padding:20

    }
    
})
export default BookmarkScreen;

 