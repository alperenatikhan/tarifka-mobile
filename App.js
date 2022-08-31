
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './src/components/CategoryScreen'
import RecipeScreen from './src/components/RecipeScreen'
import MealScreen from './src/components/MealScreen'


export default function App() {

const Stack = createNativeStackNavigator();

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


