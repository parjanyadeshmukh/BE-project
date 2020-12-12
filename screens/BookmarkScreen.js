import React from "react";
import{
  StyleSheet,Text,TextInput,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView
} from "react-native";
import 'react-native-gesture-handler';
import {useNavigation} from "@react-navigation/native";


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
  const navigation = useNavigation();
    return(
      <View style={styles.container}>
      <View>
        <Text style={styles.text1}>
        List Of Meetings Scheduled
        </Text>
     </View>

      <View style={styles.cardView}>
            <SafeAreaView>
                  <Text style={styles.title}>Meeting Request</Text>
                  <Text style={styles.description}>Name of Visitor:</Text>
                  <Text style={styles.description}>In Time:</Text>
                  <Text style={styles.description}>Reason of Visit:</Text>
      {/* <Text style={styles.subtitle}>Name of Visitor</Text>
      <Text style={styles.description}>abdmmndn</Text>
      <Text style={styles.description}>ksmhflgj</Text> */}
      
      {/* <FlatButton text="Done" /> */}
      {/* <FlatButton text="Decline"  />  */}

      <TouchableOpacity 
                    style = {styles.button}>
                      {/* onPress = {() => navigation.navigate('HomeScreen')}  */}
                    
                    <Text style ={styles.buttontext} >Done</Text>
      </TouchableOpacity>  
      
      
      </SafeAreaView>
    </View>


      <TouchableOpacity
        style = {styles.backbutton}
        onPress = {() => {navigation.goBack()}}>
        <Text style ={styles.backbuttontext} >
          Back
        </Text>
      </TouchableOpacity>

      </View>
    )
};
  
  // export default BookmarkScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#AAAAAA' 
        
    },
    text1:{
      fontSize:35,
      fontWeight:'bold',
      //color:'#455a64',
      color: '#000000',
      textAlign:'center',
      padding:10,
      fontFamily:"sans-serif",
      // borderColor:'#455a64',
      borderColor: '#EEEEEE',
      borderWidth:7,
      borderRightWidth:0,
      borderLeftWidth:0
      
    },

    cardView:{
      backgroundColor:'#EEEEEE',
        margin:15,
        paddingLeft: 30,
        width:width,
        marginLeft:10,
        marginRight:10,
       borderRadius:10,
      // borderRightWidth: 100,
      shadowColor:'#000',
      shadowOffset:{width:0.5, height:1},
      shadowOpacity:0.5,
      shadowRadius:5,
      alignItems: 'center',
      borderColor:'#EEEEEE',
      borderWidth:7,
      borderRightWidth:0,
      borderLeftWidth:0
    },
    title:{
      width:width,
      margin:width*0.05,
      color:'black',
      fontSize:20,
      fontWeight:'bold',
      // textAlign: 'center'
     
    },
    // subtitle:{
    //   flexDirection: 'row',
    //   width:width,
    //   color:'black',
    //   margin:width*0.05,
    //   fontSize:18,
    //   // paddingBottom:15
    // },
    description:{
      color:'696969',
      flexDirection: 'row',
      color:'black',
      width:width,
      margin:width*0.05,
      fontSize:17,
      // paddingBottom:15
    },

    button : {
      width : 120,
      // backgroundColor : '#1c313a',
      backgroundColor: '#000000',
      borderRadius : 25,
      marginVertical : 20,
      marginHorizontal: 20,
      paddingVertical : 13
    },

    buttontext : {
      fontSize : 16,
      fontWeight : '500',
      color : '#ffffff',
      textAlign : 'center'
    },

    backbutton : {
      width : 100,
      backgroundColor: '#000000',
      // backgroundColor : '#1c313a',
      borderRadius : 10,
      marginVertical : 10,
      paddingVertical : 13
    },

    backbuttontext : {
      fontSize : 16,
      fontWeight : '500',
      color : '#ffffff',
      textAlign : 'center'
    }
    // button:{
    //   padding:10,
    //   borderRadius:5,
    //   // borderVertical:14,
    //   // borderHorizontal:10,
    //   backgroundColor:"#303f46",
    //   marginHorizontal:30,
    //   marginBottom:10    
    // },
    // buttonText:{
    //   color:"#fffff4",
    //   fontSize:20,
    //   fontWeight:'bold',
    //   alignContent:'center',
    //   textAlign:'center'
      
    // }
})
export default BookmarkScreen;

  
 