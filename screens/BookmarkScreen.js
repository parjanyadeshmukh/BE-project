import React,{useState,useEffect} from "react";
import{
  StyleSheet,Text,TextInput,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView
} from "react-native";
import 'react-native-gesture-handler';
import {useNavigation,useIsFocused} from "@react-navigation/native";
import {getUserDetails,clearAsyncStorage} from './helper';
import axios from 'axios';


const {width,height}= Dimensions.get('window')

// function FlatButton({text,onPress}){
//   return(
//     <TouchableOpacity onPress={onPress}>
//       <View style={styles.button}>
//         <Text style={styles.buttonText}>{text}</Text>
//       </View>
//     </TouchableOpacity>
//   )
// }




const BookmarkScreen=()=>
{
  const isFocused = useIsFocused()

const[acceptedAppointments,setacceptedAppointments]=useState([])

useEffect(()=>{
  getAcceptedAppointments();
},[isFocused])


const getAcceptedAppointmentsAPI=async(data)=>
{
  try{
    const payload={
      empid:data.empid
    }
    console.log(payload,'payload')
  const res=axios.post('http://192.168.43.194:3000/acceptedappointments', payload)
  return res
  }
  catch(err)
  {
    return err
  }
  
}
const getAcceptedAppointments=async()=>{
  const employeedata=await getUserDetails();
  const data = JSON.parse(employeedata)
  const response=await getAcceptedAppointmentsAPI(data)
    setacceptedAppointments(response.data)
    console.log(response.data,'res-get-acceptedappointments')
}
  const navigation = useNavigation();
    return(
      <View style={styles.container}>
      <Text styles={styles.text1}>Accepted Meetings</Text>

      </View>
    )
};
  
  // export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        // flex:1,
        alignItems:'center',
        backgroundColor:'#1f6f8b' 
        
    },
    text1:{
      color:"white",
      fontSize:35,
      fontWeight:'bold',
      textAlign:'center',
      
    },

    
})
export default BookmarkScreen;

 