
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';


export default function GiveIcons({category}){

const iconParams = {"color": "whitesmoke", "size": 36}




return(
<>
{    
     category == "Beef"             ?       (<MaterialCommunityIcons name="cow" size={iconParams.size} color= {iconParams.color} />) :
     category == "Breakfast"        ?       (<MaterialIcons name="free-breakfast" size={iconParams.size} color= {iconParams.color}/>) :
     category == "Chicken"          ?       (<MaterialCommunityIcons name="food-turkey" size={iconParams.size} color= {iconParams.color} />) :
     category == "Dessert"          ?     (<MaterialCommunityIcons name="cupcake" size={iconParams.size} color= {iconParams.color} />) :
     category == "Goat"             ?      null :
     category == "Lamb"             ?      (<MaterialCommunityIcons name="sheep" size={iconParams.size} color= {iconParams.color}   />) :
     category == "Miscellaneous"    ?      (<MaterialIcons name="icecream" size={iconParams.size} color= {iconParams.color}  /> ):
      category == "Pasta"           ?      (<MaterialCommunityIcons name="noodles"  size={iconParams.size} color= {iconParams.color}  />) :
      category == "Pork"            ?      (<MaterialCommunityIcons name="pig" size={iconParams.size} color= {iconParams.color} />) :
     category == "Seafood"          ?      ( <MaterialCommunityIcons name="fish" size={iconParams.size} color= {iconParams.color}/>) :
     category == "Side"             ?      (<MaterialCommunityIcons name="silverware-spoon" size={iconParams.size} color= {iconParams.color}/>) :
     category == "Starter"          ?      (<MaterialCommunityIcons name="toaster" size={iconParams.size} color= {iconParams.color}/>) :
     category == "Vegan"            ?      (<MaterialCommunityIcons name="cow-off" size={iconParams.size} color= {iconParams.color}/>) :
     category == "Vegetarian"        ?      (<MaterialCommunityIcons name="corn" size={iconParams.size} color= {iconParams.color} />) :
    null
}

</>

)

}
