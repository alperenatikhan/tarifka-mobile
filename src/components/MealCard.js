import { Text, View, TouchableOpacity,Image } from 'react-native';




export default function MealCard({item}){



return(


<TouchableOpacity style={{width:'250px',marginBottom: '15px', backgroundColor:'#1db954', borderRadius:'20px', border:'1px solid whitesmoke'}} key={index} onPress={()=> navigation.navigate('Recipe',{ id: item.idMeal, name: item.strMeal})}> <View style={{flex:'1', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}> <Image source={{uri:item.strMealThumb}} style={{width:'100px', height:'100px'}} /> <Text style={{width:'20ch', marginLeft:'25px', color:'whitesmoke', fontWeight:'bold'}}> {item.strMeal} </Text> </View> </TouchableOpacity>
)


}
