
import { StyleSheet, Text,FlatList, View, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import GiveIcons from './GiveIcons.js'


export default function CategoryScreen({navigation}) {


let [data, setData] = useState([])


  let renderCategoryItem =  ({item})=>{

if(item?.strCategory=='Goat'){
return(null)

}else{

    return(
  <TouchableOpacity style={{border: '1px solid #1ed760',width:'120px', flexDirection:'column',
   height:'100px',alignItems:'center',justifyContent:'center', marginBottom:'12px', 
   marginLeft:'6px',borderRadius:'14px'}} 
   onPress = {()=> navigation.navigate('Meals', {title: item?.strCategory} )}>  
   <GiveIcons category={item?.strCategory}/>
    <Text style={styles.categoryText}>{item?.strCategory}</Text> 
    </TouchableOpacity> 
    )}
  }


let fetchData=async()=> {

let resp = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(item=> item.data).then(item=> item.categories)

let output = await setData(resp)
let outprint =await console.log(resp)

}

useEffect(()=> {fetchData() }  ,[])

  return (

    <SafeAreaView style={styles.pageWrapper}>
     
      <ScrollView style={{flex:'1', margin:'5%'}}>

<FlatList    
data={data}
keyExtractor ={(item,index) => index.toString()}
contentContainerStyle={{alignItems:'center',
 justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'}}
renderItem ={ renderCategoryItem}
/>
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
