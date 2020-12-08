import React from "react";
import{
  StyleSheet,Text,View,Button
} from "react-native";
import 'react-native-gesture-handler';


const MeetingscheduleScreen=()=>{ 
    return(
      <View style={styles.container}>
        <Text>
        Meeting to be Schedule
        </Text>
      </View>
    )
    };
  
  export default MeetingscheduleScreen;

  const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
})