import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, ImageBackground} from 'react-native';
import * as WebBrowser from 'expo-web-browser'
import React, {useState,useEffect} from 'react';
import IngredientCard from './IngredientCard'
import globalStyles from '../../styles/globalStyles.js'


export default function RecipeCard({data, ingredients}) {

const [menuOpen,setMenuOpen]= useState(false)
let [result,setResult] = useState(null)

const handlePressButtonAsync = async (url) => {
    let result = await WebBrowser.openBrowserAsync(url)
    setResult(result)
}

return(
<View style={styles.pageWrapper}>




<View style={{backgroundColor:'#1db954',flex:'1', width:'90vw', minWidth:'250px', maxWidth:'500px'}}>
<Image source={{uri:data.strMealThumb}} style={{width:'100%', height:'250px' }}   />


<View style={{flex:'1', flexWrap:'wrap', gap: '15px',flexDirection:'row',marginLeft:'30px', marginBottom:'14px', marginTop:'18px', justifyContent:'space-around'}}>
<TouchableOpacity style = {globalStyles.buttonDesign} onPress={()=> setMenuOpen(menuOpen == false ? 'ingredient': menuOpen =='ingredient'? false: 'ingredient')}><Text style={globalStyles.midButton}> Ingredients  </Text></TouchableOpacity>

<TouchableOpacity style = {globalStyles.buttonDesign} onPress={()=> setMenuOpen( menuOpen == false ? 'recipe': menuOpen =='recipe'? false: 'recipe')}><Text style={globalStyles.midButton}> Recipe  </Text></TouchableOpacity>
<TouchableOpacity onPress={()=> handlePressButtonAsync(data.strYoutube)}><Text style={styles.youtubeButton}> Watch in Youtube  </Text></TouchableOpacity> 
</View>

 

<View style={{flex:'1', flexDirection:'column'}}>
{menuOpen==='ingredient' ? <View style={{padding:'20px', backgroundColor:'#1db954', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', textAlign:'left' }}> <>{ingredients.map((item,index) => <IngredientCard isIngredient={true} key={index} data={item}/>)}</> </View>:
menuOpen==='recipe' ? <View style={{padding:'20px', backgroundColor:'#1db954', flexDirection:'column', justifyContent:'center', alignItems:'center' }}> <IngredientCard key={1} isIngredient={false} data={data.strInstructions}/>  </View>
:null

}


</View>

</View>





</View>
)

}

const styles = StyleSheet.create({

    pageWrapper: {flex:'1',
    width:'100vw',
    height:'100vh',
    maxWidth: '500px',
    justifyContent:'center',
    alignItems:'center'},
    
    youtubeButton:{

        backgroundColor:'whitesmoke',
         color:'orangered',
         width:'120px',
         padding:'10px', 
         borderRadius:'6px', 
         flexDirection:'column', 
         justifyContent:'center', 
         alignItems:'center', 
         textAlign:'center',
         fontWeight:'bold'
    } 






})
