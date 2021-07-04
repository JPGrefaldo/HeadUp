import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

export default function MainNav() {
  return (
    <NavigationContainer>      
	<Stack.Navigator>
	<Stack.Screen
	  name="Home"
	  component={Home}
	  options={{ title: 'Headlines' }}
	/>
	<Stack.Screen
	  name="Details"
	  component={Details}
	  options={{ title: 'Details' }}
	/>
  </Stack.Navigator></NavigationContainer>
  );
}