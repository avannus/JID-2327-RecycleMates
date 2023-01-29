/* eslint-disable react/display-name */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './home';
import Login from './login';
import navBar from '../components/navBar';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={navBar('Home')} />
        <Stack.Screen name='Details' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
