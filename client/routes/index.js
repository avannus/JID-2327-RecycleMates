import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import RegisterInfo from './RegisterInfo';
import Landing from './Landing';
import AccountType from './Account Type';
import Edit from './Edit';
import DriverHome from './DriverHome';

const Stack = createNativeStackNavigator();

function RMRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DriverHome'>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Account Type' component={AccountType} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RegisterInfo' component={RegisterInfo} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name ='Edit' component={Edit} />
        <Stack.Screen name ='DriverHome' component={DriverHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RMRoutes;
