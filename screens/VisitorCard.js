import React from "react";
import{
  StyleSheet,Text,View,Button,TouchableOpacity,Dimensions,SafeAreaView,ScrollView
} from "react-native";


const {width,height}= Dimensions.get('window')

function FlatButton({text,onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const VisitorCard = ({item}) => {
  return(
    <ScrollView>
    <View style={styles.cardView}>
    <SafeAreaView>
      <Text style={styles.title}>Meeting Request</Text>
      <Text style={styles.subtitle}>{item.id}</Text>
      <Text style={styles.description}>{item.userId}</Text>
      <Text style={styles.description}>{item.title}</Text>
      {/* <Text style={styles.subtitle}>Name of Visitor</Text>
      <Text style={styles.description}>abdmmndn</Text>
      <Text style={styles.description}>ksmhflgj</Text> */}
      
      <FlatButton text="Accept" />
      <FlatButton text="Decline"  /> 
      
      
      </SafeAreaView>
    </View>
    </ScrollView>
  )
}


const styles=StyleSheet.create({
  cardView:{
    backgroundColor:'#fff',
    margin:15,
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset:{width:0.5, height:1},
    shadowOpacity:0.5,
    shadowRadius:5
  },
  title:{
    width:width,
    margin:width*0.05,
    color:'black',
    fontSize:20,
    fontWeight:'bold'
   
  },
  subtitle:{
    flexDirection: 'row',
    width:width,
    color:'black',
    margin:width*0.05,
    fontSize:18,
    // paddingBottom:15
  },
  description:{
    flexDirection: 'row',
    color:'black',
    width:width,
    margin:width*0.05,
    fontSize:17,
    // paddingBottom:15
  },
 
  button:{
    padding:10,
    borderRadius:5,
    // borderVertical:14,
    // borderHorizontal:10,
    backgroundColor:"#303f46",
    marginHorizontal:30,
    marginBottom:10
    
      
  },
  buttonText:{
    color:"#fffff4",
    fontSize:20,
    fontWeight:'bold',
    alignContent:'center',
    textAlign:'center'
    
  }
})

export default VisitorCard;