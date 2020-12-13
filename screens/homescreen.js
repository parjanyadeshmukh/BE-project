import React,{useState,useEffect} from "react";
import{
  StyleSheet,Text,View,Button,ScrollView,FlatList, ActionSheetIOS
} from "react-native";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import VisitorCard  from "./VisitorCard";
// import newAPI from './fetchapi';
import { useRoute } from '@react-navigation/native';
import {setUserDetailsInStorage} from './helper';
import axios from 'axios';


const HomeScreen=()=>{
  const navigation = useNavigation()
  const route = useRoute()
  const [appointments,setAppointments] = useState([])
  const {empdata}=route.params
  useEffect(()=> {
         setUser()
         getAppointments()
      },[empdata.empid])

      const setUser=async()=>{
        const stringifiedData=JSON.stringify(empdata)
        await setUserDetailsInStorage(stringifiedData);
        
      }

      const getAppointmentsAPI=async()=>{
        try {
          const payload = {
            empid:empdata.empid
          }
  const res = axios.post('http://192.168.43.194:3000/getappointments', payload)
return res
        }
    catch(err)
    {
      return err
    }

      }

      const getAppointments = async()=>{
       
        const response = await getAppointmentsAPI()
        setAppointments(response.data)
 console.log(response.data,'res-get-appointments')
      }
    

    

    return( 
      // <View style={styles.container}>
      <View style={styles.container1}>
     <View style = {{flexDirection:"row", marginTop:15}}>
  
<Icon name="menuunfold" onPress={()=>navigation.openDrawer()} size={24} color={'white'} style = {{marginLeft:4}}/>
  
      
          <Text style={styles.text1} >Visitor Management System</Text>
         
          </View>
          {/* <Text style={styles.text2}>Visitor Meeting Schedule</Text> */}
          
       {appointments.length>0 ? 
       
            <FlatList data={appointments}
            keyExtractor={(item,index) => 'key' + index }
            renderItem = {({item}) => {
              return <VisitorCard item ={item} employeeData = {empdata} fromHomePage={true} />
            }}
            /> : 
            <Text>No meeting requests</Text>}
  
  
      </View>
    );
  };

  const styles=StyleSheet.create(
    {
      container:{
        flex:1,
        backgroundColor:'#fff',
        // flexDirection:"row",
        // justifyContent:"center",
      },
      text:{
        fontSize:20,
        paddingTop:30,
        fontWeight:'bold',
        width:400,
        textAlign:"center",
        fontFamily:"sans-serif-light",
        color :"#fffff4"
      },
      text1:{
        fontSize:25,
        fontWeight:'bold',
        fontSize:20,
        width:400,
        color :"#fffff4",
        paddingBottom:50,
        textAlignVertical:'center',
        marginLeft:50,
       },
      container1:{
        flex:1,
        backgroundColor:'#1f6f8b'
        
      },
      scrollView: {
        backgroundColor: '#fff',
        // marginHorizontal: 10,
      },
      text2:{
        fontSize:22,
        paddingBottom:15,
        paddingTop:20,
        fontWeight:'bold',
        // width:400,
        textAlign:"center",
        // fontFamily:"sans-serif-light",
        color :"#fffff4",
        backgroundColor:'#455a64',
        borderWidth:5,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"#fffff4",
        borderTopColor:"#fffff4",
       
      },
    }
  );

  export default HomeScreen;