import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, FlatList } from 'react-native';
import React, {useState,useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
import CategoryScreen from './src/components/CategoryScreen'
import RecipeScreen from './src/components/RecipeScreen'
import MealCard from './src/components/MealCard'



function MealScreen({route, navigation}){

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




return(




<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#191414' }}>



      <Text style={{color:'whitesmoke', fontWeight:'bold', fontSize:'16px', marginTop:'5px', marginBottom:'10px', padding: '10px'}}> Selected Category : <Text style={{color:'orangered', backgroundColor:'whitesmoke',margin:'5px', padding:5}}>{title}</Text></Text>

{mealCount && <Text style={{color:'whitesmoke'}}> {mealCount} recipes are waiting for you! </Text>}

{pageCount && <Text style={{color:'whitesmoke'}}> in {pageCount} pages </Text>}


{paginationArray.length>1 && 
 
<View style={{flexDirection:'row'}}>
{paginationArray.map((item,index) => <TouchableOpacity onPress={() => setCurrentPage(item)} key={index}> <Text style={currentPage==item ?{backgroundColor: 'whitesmoke', color:'dodgerblue', margin:'5px',}  :{backgroundColor: 'dodgerblue', color:'whitesmoke', margin:'5px',}}> {item} </Text> </TouchableOpacity>)}
</View>


}


<ScrollView showsHorizontalScrollIndicator={false} style={{ marginTop: '20px'}}>


<FlatList
data={meals}
keyExtractor={(item,index) => index.toString()}
renderItem = {({item}) => ( <TouchableOpacity style={{width:'250px',marginBottom: '15px', backgroundColor:'#1db954', borderRadius:'20px', border:'1px solid whitesmoke'}} onPress={()=> navigation.navigate('Recipe',{ id: item.idMeal, name: item.strMeal})}><View style={{flex:'1', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}> <Image source={{uri:item.strMealThumb}} style={{width:'100px', height:'100px'}} /> <Text style={{width:'20ch', marginLeft:'25px', color:'whitesmoke', fontWeight:'bold'}}> {item.strMeal} </Text> </View></TouchableOpacity>)
} 

/>
    
</ScrollView>
</SafeAreaView>
)

}




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="Meals" component={MealScreen} />
    <Stack.Screen name="Recipe" component={RecipeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


