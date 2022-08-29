import {Text} from 'react-native'


export default function IngredientCard({data, isIngredient}){

return(

<Text style={isIngredient? {maxWidth:'50ch',color:'black', marginTop:'4px', marginLeft:'50px',textAlign:'left', marginRight: '10px'} :{maxWidth:'50ch',color:'black', marginTop:'4px', marginLeft:'50px',textAlign:'justify', marginRight: '10px'}}>{data} </Text>



)


}
