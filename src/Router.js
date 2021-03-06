import React from 'react';
import {} from 'react-native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import Meals from './pages/Meals';
import Details from './pages/Details';
import Categories from './pages/Categories';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fce4ec',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#c48b9f',
          },
        }}>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{title: 'Categories'}}
        />
        <Stack.Screen
          name="MealsPages"
          component={Meals}
          options={{title: 'Meals'}}
        />
        <Stack.Screen
          name="DetailsPages"
          component={Details}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
