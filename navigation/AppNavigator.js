import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Pic from '../images/profile.png';
import Oakland from '../images/oakland.png';

// initialize my stack
const MealsStack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50, marginBottom: 10 }}
      source={Oakland}
    />
  );
}

// create navigator component
const MealsNavigator = () => {
  return (
    <MealsStack.Navigator>
      <MealsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={
          (({ route }) => ({ title: route.params.title }),
          {
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: (props) => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Meal Types')}
                title="Info"
                color="#00cc00"
              >
                <Image style={{ width: 50, height: 40 }} source={Pic} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'pink',
            },
          })
        }
      />
      <MealsStack.Screen
        name="Meal Types"
        options={
          (({ route }) => ({ title: route.params.title }),
          {
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                title="Info"
                color="#00cc00"
              >
                <Image style={{ width: 50, height: 40 }} source={Pic} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'pink',
            },
          })
        }
        component={CategoryMeals}
      />
      <MealsStack.Screen
        name="Meal Details"
        component={MealDetailScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              title="Info"
              color="#00cc00"
            >
              <Image style={{ width: 50, height: 40 }} source={Pic} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
      />
      <MealsStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              title="Info"
              color="#00cc00"
            >
              <Image style={{ width: 50, height: 40 }} source={Pic} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: 'pink',
          },
        }}
      />
    </MealsStack.Navigator>
  );
};

export default MealsNavigator;
