
import { StyleSheet, Text,FlatList, View, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native';
import React, {useState,useEffect} from 'react';
import axios from 'axios'
import GiveIcons from './GiveIcons.js'
import CategoryCard from './CategoryCard.js'





export default function CategoryScreen({navigation}) {

const [data,setData] = useState([])

let fetchData=async()=> {

let resp = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then(item=> item.data).then(item=> item.categories)

let output = await setData(resp)
let outprint =await console.log(resp)

}

useEffect(()=> {fetchData() }  ,[])

let renderCategoryItem = ({item}) => {
  <TouchableOpacity style={{ border: '1px solid #1ed760',width:'120px', flexDirection:'column', height:'100px',alignItems:'center',justifyContent:'center', marginBottom:'12px', marginLeft:'6px',borderRadius:'14px'}} onPress = {()=> navigation.navigate('Meals', {title: item.strCategory} )}> <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center'}}> <GiveIcons category={item.strCategory}/> <Text style={styles.categoryText}>{item.strCategory} </Text> </View></TouchableOpacity>

}


  return (
<>
    <SafeAreaView style={styles.pageWrapper}>
      <Text>Home Screen</Text>
      <ScrollView style={{flex:'1', margin:'5%'}}>


            <View style={{flexDirection:'row', flexWrap:'wrap', overflowX:'hidden'}}>

<FlatList    
data={data}
keyExtractor ={(item,index) => index.toString()}
contentContainerStyle={{alignItems:'center',
 justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'}}
renderItem ={ ({item})=>
(<> <TouchableOpacity style={{border: '1px solid #1ed760',width:'120px', flexDirection:'column', height:'100px',alignItems:'center',justifyContent:'center', marginBottom:'12px', marginLeft:'6px',borderRadius:'14px'}} onPress = {()=> navigation.navigate('Meals', {title: item.strCategory} )}> <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center'}}> <GiveIcons category={item.strCategory}/> <Text style={styles.categoryText}>{item.strCategory} </Text> </View></TouchableOpacity> </>)
}
/>

 </View>


</ScrollView>
    </SafeAreaView>
</>
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
