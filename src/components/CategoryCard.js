
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, FlatList } from 'react-native';
import GiveIcons from './GiveIcons.js'


export default function CategoryCard({navigation, item}){



return(

<TouchableOpacity style={{ border: '1px solid #1ed760',width:'120px', flexDirection:'column', height:'100px',alignItems:'center',justifyContent:'center', marginBottom:'12px', marginLeft:'6px',borderRadius:'14px'}} onPress = {()=> navigation.navigate('Meals', {title: item.strCategory} )}>

 <View style={{flexDirection:'column',alignItems:'center', justifyContent:'center'}}> 

<GiveIcons category={item.strCategory}/>
 <Text style={styles.categoryText}>{item.strCategory} </Text> 

</View> 
</TouchableOpacity>
)


}
