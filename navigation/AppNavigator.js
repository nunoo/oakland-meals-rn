import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';

// initialize my stack
const MealsStack = createStackNavigator();

// create navigator component
const MealsNavigator = () => {
    return (
        <MealsStack.Navigator>
            <MealsStack.Screen 
                name="Categories" 
                component={CategoriesScreen}
                />
            <MealsStack.Screen 
                name="Meal Types"
                options={({route}) => ({title: route.params.title})} 
                component={CategoryMeals} 
                />
            <MealsStack.Screen 
                name="Meal Details" 
                component={MealDetailScreen} 
                />
        </MealsStack.Navigator>
    );
}

export default MealsNavigator;