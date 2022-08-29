import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ScrollView,Image, FlatList } from 'react-native';
import React, {useState,useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios'
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons'
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


