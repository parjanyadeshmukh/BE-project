import React,{useState} from "react";
import{
  StyleSheet,Text,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView
} from "react-native";
import axios from 'axios';
import { getAppointmentsAPI,getAcceptedAppointmentsAPI,BASE_URL } from './helper';
const {width,height}= Dimensions.get('window')

const VisitorCard = ({item,employeeData,fromHomePage,setAppointments,setacceptedAppointments}) => {

const updateAppointments = async()=>{
const response = await getAppointmentsAPI(employeeData)
if(response && response.data){
  setAppointments(response.data)
}
}
  const acceptanddeclineAPI = async(visitorstatus)=>{
    try {
      const payload = {
        empname:employeeData.empname,
        visitorname : item.nameofv,
        reasonofvisit:item.reasonofvisit,
        val:visitorstatus
        
      }
      console.log(payload,'payload-accept-decline')
const res = await axios.post(`${BASE_URL}/acceptdecline`, payload)
return res
    }
catch(err)
{
  return err
}
    
  }
  const acceptanddecline = async(value)=>{

   const response= await acceptanddeclineAPI(value)
   console.log(response.data,'res-accept-decline')
 
    await updateAppointments()
  }
  const scheduleDayFinal = item.scheduleday[4]+item.scheduleday[5]+item.scheduleday[6]+item.scheduleday[7]+item.scheduleday[8]+item.scheduleday[9]+item.scheduleday[3]+item.scheduleday[0]+item.scheduleday[1]+item.scheduleday[2]
  const timeOVisitFinal = item.timeofvisit[11]+item.timeofvisit[12]+item.timeofvisit[13]+item.timeofvisit[14]+item.timeofvisit[15]
  

  const doneApi=async()=>{
 
    try{
      const payload={
        empname:employeeData.empname,
        visitorname:item.nameofv,
        val:'0'
      }
      console.log(payload,'payload-done')
      const res = await axios.post(`${BASE_URL}/done`, payload)
      return res
    }
    catch(err)
    {
      return err
    }
  }
  const done=async()=>{
   const response= await doneApi()
       const res = await getAcceptedAppointmentsAPI(employeeData)
      setacceptedAppointments(res.data)
   console.log(response,'res-done')
  }
  const renderAcceptedMeetingsData=()=>{
    return (
      <View style={styles.cardView}>
          
          <Text style={styles.title}>Name: {item.nameofv} </Text>
         <Text style={styles.description}>Reason of Visit : {item.reasonofvisit}</Text>
         <View style = {{flexDirection:'row'}}>
          <Text style={styles.description}>Date:{scheduleDayFinal }</Text>
          <Text style={styles.description}>Time(24 Hrs format):{timeOVisitFinal }</Text>
          </View>
          <View style = {{ flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
           <TouchableOpacity style = {styles.button} onPress={done}>
          <Text style={styles.buttonTextAccept}>Done</Text>
          </TouchableOpacity>
          </View>
      
        </View>
          )
  }
  
  const renderHomePagedata=()=>{
    return (
<View style={styles.cardView}>
    
    <Text style={styles.title}>Meeting Requested by {item.nameofv} </Text>
   <Text style={styles.description}>Reason of Visit : {item.reasonofvisit}</Text>
   <View style = {{flexDirection:'row'}}>
    <Text style={styles.description}>Date:{scheduleDayFinal }</Text>
    <Text style={styles.description}>Time(24 Hrs format):{timeOVisitFinal }</Text>
    </View>
    <View style = {{ flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
     <TouchableOpacity style = {styles.button} onPress={()=>acceptanddecline('1')}>
    <Text style={styles.buttonTextAccept}>Accept</Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles.button} onPress={()=>acceptanddecline('0')}>
    <Text style={styles.buttonTextDecline}>Decline</Text>
  </TouchableOpacity>
    </View>

  </View>
    )
    
  }
  
  return(
    fromHomePage ?
renderHomePagedata():renderAcceptedMeetingsData()
    
   
  )
}


const styles=StyleSheet.create({
  cardView:{
    backgroundColor:'#fff3e2',
    margin:15,
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{width:0.5, height:1},
    shadowOpacity:0.5,
    shadowRadius:5
  },
  title:{
    width:width,
    margin:12,
    
    color:'black',
    fontSize:14,
    fontWeight:'bold'
   
  },
  description:{
    flexDirection: 'row',
    color:'black',
    fontSize:14,
    marginBottom:12,
    marginLeft:12,
 
  },
 
  button:{
marginBottom:10,
 justifyContent:'space-around',
 alignItems:'center',
 marginRight:5,
    
      
  },
  buttonTextAccept:{
    color:"green",
    paddingHorizontal:80,
  
    
  },
  buttonTextDecline:{
    color:"red",
    paddingHorizontal:80,
  
    
  }
})

export default VisitorCard;