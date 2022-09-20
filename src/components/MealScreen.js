
import {Text,StyleSheet, View, TouchableOpacity, SafeAreaView,ScrollView,Image, FlatList } from 'react-native';
import React, {useState,useEffect, useMemo} from 'react';
import axios from 'axios'


export default function MealScreen({route, navigation}){

const { title } = route.params


let [meals, setMeals] = useState([])
let [mealCount, setMealCount] = useState(false)
let [pageCount, setPageCount] = useState(false)
let [paginationArray, setPaginationArray]=useState([])
let [currentPage, setCurrentPage] = useState(1)



let fetchData=async(category)=> {

let resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(item=> item.data).then(item=> item.meals)

let countMeal = await resp?.length

let countPage = Math.ceil(resp?.length/5)
let outdishes =  setMeals(resp)
let outmealcount = setMealCount(countMeal)
let outpagecount = setPageCount(countPage)

}

let sliceMeals =(obj,currentPage)=> obj.slice(((currentPage-1)*5), currentPage*5)

let paginatedMeals = useMemo(() => sliceMeals(meals,currentPage)  , [meals,currentPage])


const fillPaginationArray = (pageCount) => {
let firstPaginationArray =[]

for(let num=1; num<pageCount+1; num++ ){
firstPaginationArray.push(num)
}

setPaginationArray(firstPaginationArray)

}




useEffect(()=> {fetchData(title)} ,[title])
useEffect(() => {fillPaginationArray(pageCount)},[pageCount])


let renderMealItem = ({item}) => {


   return (
   
   <TouchableOpacity style={styles.mealButton} onPress={()=> navigation.navigate('Recipe',{id: item?.idMeal, name: item?.strMeal, imageLink:item?.strMealThumb})}>
         <Image source={{uri:item?.strMealThumb}} style={styles.mealPhoto} />
          <Text style={styles.mealText}> {item?.strMeal} </Text> 
     </TouchableOpacity>)

} 

const renderPaginationItem = ({item}) => {

   
return(

<TouchableOpacity onPress={() => setCurrentPage(item)}> 
<Text style={currentPage=== item ? styles.currentPageText :styles.pageText }> {item} </Text> 
</TouchableOpacity>
)   

}

return(


<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#191414' }}>



      <Text style={styles.mealText}> Selected Category : <Text style={{color:'orangered', backgroundColor:'whitesmoke',margin:'5px', padding:5}}>{title}</Text></Text>

<Text style={{color:'whitesmoke'}}> {mealCount} recipes are waiting for you! </Text>

<Text style={{color:'whitesmoke'}}> in {pageCount} pages </Text>



 






<FlatList 

data = {paginationArray}
keyExtractor ={(item,index) => index.toString()}
renderItem ={renderPaginationItem}
contentContainerStyle={styles.resultContainer}
/>






<ScrollView showsHorizontalScrollIndicator={true} style={{ width:'100%', marginTop: '20px'}}>



<FlatList
data={paginatedMeals}
keyExtractor={(item,index) => index.toString()}
renderItem = {renderMealItem}
contentContainerStyle={styles.resultContainer}
/>


  
</ScrollView>
</SafeAreaView>


)

}

const styles = StyleSheet.create({


mealButton:{flexDirection:'row', alignItems:'center', width:'250px',marginBottom: '15px', backgroundColor:'#1db954', borderRadius:'20px'},
mealText:{color:'whitesmoke', fontWeight:'bold', fontSize:'16px', marginTop:'5px', marginBottom:'10px', padding: '10px'},
mealPhoto:{width:'100px', height:'100px'},
currentPageText:{backgroundColor: 'whitesmoke', color:'green', margin:'5px'},
pageText: {backgroundColor: 'green', color:'whitesmoke', margin:'5px'},
resultContainer:{marginVertical:'10', alignItems:'center', justifyContent: 'space-evenly',flexDirection: 'row', flexWrap: 'wrap'},
cardContainer:{alignItems:'center', justifyContent: 'space-around',flexDirection: 'row', flexWrap: 'wrap'}

})
