import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import RegisterInfo from './RegisterInfo';
import Entry from './Entry';

const Stack = createNativeStackNavigator();

function RMRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Entry'>
        <Stack.Screen name='Entry' component={Entry} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RegisterInfo' component={RegisterInfo} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RMRoutes;
