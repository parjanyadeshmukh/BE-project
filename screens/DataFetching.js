import React,{useState,useEffect} from "react";
import axios from 'axios';
import{
  StyleSheet,Text,View,Button,TouchableOpacity,TextInput
} from "react-native";
import newAPI from './fetchapi';

// function DataFetching(){
//     const[post, setPost]=useState({})
//     const [id, setId]=useState(1)
//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then(res => {
//                 console.group(res)
//                 setPost(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, [id])
//     return(
    
        
//         <View>
//             <TextInput keyboardType={'numeric'} value={id} placeholder={"Employee Id"} onChange={e=> {
//                 return setId(e.target.value);
//             }} />
//             <Text>{post.title}</Text>
//         </View>
//                 /* {
//                     posts.map(post => {
//                         return <Text key={post.id}>{post.title}</Text>;
//                     })
//                 } */
            
        
//     )
// }


// export default DataFetching;





// const DataFetching=({navigaton}) =>{

//   useEffect(()=> {
//     getDatafromApi()
//   },[])

//   // const NewResponse=async() =>{
//   //   const response=await newAPI.get('')
//   //   console.log(response.data)
//   // }
//   function getDatafromApi() => {
//     .then(function(response)){
//       newAPI.get('1b4defb08b58b7d34e5bdcd5716b5d44-us7')
//       .then(function(response)){
//         setPosts(response.data);
//       })
//       .catch(function(error)){
//         console.log(error)
//       })        
// }
//   }
// if (!posts){
//   return null
// }


