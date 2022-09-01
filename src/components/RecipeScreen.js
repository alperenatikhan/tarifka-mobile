import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, ImageBackground, FlatList} from 'react-native';
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios'
import IngredientCard from './IngredientCard'
import RecipeCard from './RecipeCard'

export default function RecipeScreen({route, navigation}){

let {id, name} = route.params
let [menuOpen, setMenuOpen] = useState(false)
let [recipeOpen,setRecipeOpen] = useState(false)
 
const [instructions,setInstructions] = useState([]);
const [ingredients,setIngredients] = useState([]);

let fetchData=async(id)=> {

let recipe = []
let ingredientsArray =[]

let resp = await axios.get(`https://tarifka-backend.vercel.app/api/searchid/${id}`).then(item=> item.data)

let arrayMake= await recipe.push(resp.result)

let output = await setInstructions(recipe)
let printout= await setIngredients(resp.ingredientString)


}

let renderRecipeCard = ({item}) =>  {

return(
<RecipeCard style={{position:'relative'}} data={item} ingredients={ingredients}/> 
)
} 

useEffect(()=> {fetchData(id)},[])


return(
<SafeAreaView >
<ScrollView style={{height:'100vh'}}>

<View style={{flex:'1', justifyContent:'center', alignItems:'center',backgroundColor:'#191414'}}>
    <Text style={{width:'90vw',minWidth: '250px', maxWidth:'500px', fontSize:'18px',textAlign:'center', backgroundColor:'rgba(245, 245, 245, 0.9)', position:'absolute', zIndex:'5', top:'0',padding:'5px', backdropFilter: 'grayscale(90%)', backdropFilter: 'saturate(60%)'  }}> 
    {name} </Text>

<FlatList 
data = {instructions}
keyExtractor={(item,index)=> index.toString()}
renderItem={ renderRecipeCard }
/>


</View>

</ScrollView>
</SafeAreaView>
)}
