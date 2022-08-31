import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView,ScrollView,Image, ImageBackground} from 'react-native';
import * as WebBrowser from 'expo-web-browser'
import React, {useState,useEffect} from 'react';
import IngredientCard from './IngredientCard'
import globalStyles from '../../styles/globalStyles.js'


export default function RecipeCard({data, ingredients}) {

const [menuOpen,setMenuOpen]= useState(false)
let [result,setResult] = useState(null)

const handlePressButtonAsync = async(url) => {
    let result = await WebBrowser.openBrowserAsync(url)
    setResult(result)
}


function handleMenu(param){

menuOpen != param ? setMenuOpen(param): setMenuOpen(false)


}


 
const renderIngredientCard=({item}) => {

return(
<IngredientCard isIngredient={true} data={item}/>
)

}


return(
<View style={styles.pageWrapper}>

    <View style={{backgroundColor:'#1db954',flex:'1', width:'90vw', minWidth:'250px', maxWidth:'500px'}}>
        <Image source={{uri:data.strMealThumb}} style={{width:'100%', height:'250px' }}   />

<View style={{flexDirection:'row', marginTop:'10px', gap:'20px', justifyContent:'space-around', flexWrap:'wrap', paddingBottom:'20px'}}>
<TouchableOpacity style = {globalStyles.buttonDesign} onPress={()=> handleMenu('ingredient')} ><Text style={globalStyles.midButton}> Ingredients  </Text></TouchableOpacity>
<TouchableOpacity style = {globalStyles.buttonDesign} onPress={()=> handleMenu('recipe')}><Text style={globalStyles.midButton}> Recipe  </Text></TouchableOpacity>
<TouchableOpacity onPress={()=> handlePressButtonAsync(data.strYoutube)}><Text style={styles.youtubeButton}> Watch in Youtube  </Text></TouchableOpacity> 
</View>


{menuOpen=='ingredient' ? <View style={styles.cardBackground}> {!!ingredients?.length ? <FlatList data={ingredients} renderItem={renderIngredientCard} keyExtractor= {(item,index)=> index.toString()} /> :null } </View>:
menuOpen=='recipe' ? <View style={styles.cardBackground}> <IngredientCard key={1} isIngredient={false} data={data?.strInstructions}/>  </View>
:null
}


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
    } ,
cardBackground:{padding:'30px', backgroundColor:'#1db954', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', textAlign:'left' }






})
