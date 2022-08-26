
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import GiveIcons from './GiveIcons.js'





export default function CategoryScreen({navigation}) {

const [data,setData] = useState([])

let fetchData=async()=> {

let resp = await axios.get('https://tarifka-backend.vercel.app/api/categories').then(item=> item.data).then(item=> item.categories)

let output = await setData(resp)

}

useEffect(()=> {fetchData() }  ,[])


  return (
    <SafeAreaView style={styles.pageWrapper}>
      <Text>Home Screen</Text>
<ScrollView style={{flex:'1', margin:'5%'}}>

<View style={{flexDirection:'row', flexWrap:'wrap', overflowX:'hidden'}}>
{data.map((item, index)=> item.strCategory==='Goat' ? null : <TouchableOpacity key = {index} style={{ border: '1px solid #1ed760',width:'120px', flexDirection:'column', height:'100px',alignItems:'center',justifyContent:'center', marginBottom:'12px', marginLeft:'6px',borderRadius:'14px'}} onPress = {()=> navigation.navigate('Meals', {title: item.strCategory} )}> <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center'}}> <GiveIcons category={item.strCategory}/> <Text style={styles.categoryText}>{item.strCategory} </Text> </View></TouchableOpacity>)}
</View>


</ScrollView>
    </SafeAreaView>
  );
}




const styles=StyleSheet.create({

pageWrapper:{

backgroundColor: '#191414'

},
categoryText:{
color: 'lightgray',
fontWeight:'bold',
marginTop:'8px',
textAlign:'center',


}



})
