import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userDetails = 'userDetail';


export const setUserDetailsInStorage = async data => {
    await AsyncStorage.setItem(userDetails, data);
};

export const getUserDetails =async() =>{
    const userData=await AsyncStorage.getItem(userDetails)
    return userData
}

export const clearAsyncStorage = async () => {
    try {
        const data = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(data);
    } catch (error) {
        logger.error('error in clearing asyncStorage');
    }
};

export const getAppointmentsAPI=async(empdata)=>{
    try {
      const payload = {
        empid:empdata.empid
      }
const res = axios.post('http://192.168.43.139:3000/getappointments', payload)
return res
    }
catch(err)
{
  return err
}

  }

  export const getAcceptedAppointmentsAPI =async (userData)=>
{
  try{
    const payload={
      empid:userData.empid
    }
    console.log(payload,'payload')
  const res=axios.post('http://192.168.43.139:3000/acceptedappointments', payload)
  return res
  }
  catch(err)
  {
    return err
  }
  
}