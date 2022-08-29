
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, FlatList } from 'react-native';
import React, {useState,useEffect, useMemo} from 'react';
import axios from 'axios'


export default function MealScreen({route, navigation}){

const { title } = route.params


let [meals, setMeals] = useState([])
let [mealCount, setMealCount] = useState(null)
let [pageCount, setPageCount] = useState(null)
let [paginationArray, setPaginationArray]=useState([])
let [currentPage, setCurrentPage] = useState('1')
let [url,setUrl] = useState()


let fetchData=async(category,currentPage)=> {

let resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(item=> item.data).then(item=> item.meals)

let countMeal = await resp.length

let countPage = await Math.ceil(resp.length/5)

let paginatedMeals = await resp.slice(((currentPage-1)*5), currentPage*5)


let outdishes = await setMeals(paginatedMeals)
let outmealcount = await setMealCount(countMeal)
let outpagecount = await setPageCount(countPage)



}


const fillPaginationArray = (pageCount) => {
let firstPaginationArray =[]

for(let num=1; num<pageCount+1; num++ ){
firstPaginationArray.push(num)
}

setPaginationArray(firstPaginationArray)

}




useEffect(()=> {fetchData(title,currentPage)} ,[currentPage])
useEffect(() => {fillPaginationArray(pageCount)},[pageCount])


const renderPaginationItem = ({item}) => <TouchableOpacity onPress={() => setCurrentPage(item)}> <Text style={currentPage==item ?{backgroundColor: 'whitesmoke', color:'green', margin:'5px',}  :{backgroundColor: 'green', color:'whitesmoke', margin:'5px',}}> {item} </Text> </TouchableOpacity>


return(




<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#191414' }}>



      <Text style={{color:'whitesmoke', fontWeight:'bold', fontSize:'16px', marginTop:'5px', marginBottom:'10px', padding: '10px'}}> Selected Category :</Text> <Text style={{color:'orangered', backgroundColor:'whitesmoke',margin:'5px', padding:5}}>{title}</Text>

{!!mealCount &&<> <View> <Text style={{color:'whitesmoke'}}> {mealCount} recipes are waiting for you! </Text> </View></>}

{!!pageCount &&<> <View> <Text style={{color:'whitesmoke'}}> in {pageCount} pages </Text></View></>}


{paginationArray.length>1 && 
 
<View style={{flexDirection:'row'}}>

<FlatList 

data = {paginationArray}
keyExtractor ={(item,index) => index.toString()}
renderItem ={renderPaginationItem}
contentContainerStyle={{alignItems:'center', justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'}}
/>

</View>


}


<ScrollView showsHorizontalScrollIndicator={true} style={{ width:'100%', marginTop: '20px'}}>



<FlatList
data={meals}
contentContainerStyle={{alignItems:'center', justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'}}
keyExtractor={(item,index) => index.toString()}
renderItem = {({item}) => ( <> <TouchableOpacity style={{width:'250px',marginBottom: '15px', backgroundColor:'#1db954', borderRadius:'20px', border:'1px solid whitesmoke'}} onPress={()=> navigation.navigate('Recipe',{ id: item.idMeal, name: item.strMeal})}><View style={{flex:'1', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}> <Image source={{uri:item.strMealThumb}} style={{width:'100px', height:'100px'}} /> <Text style={{width:'20ch', marginLeft:'25px', color:'whitesmoke', fontWeight:'bold'}}> {item.strMeal} </Text> </View></TouchableOpacity> </>)
} 

/>

  
</ScrollView>
</SafeAreaView>


)

}
