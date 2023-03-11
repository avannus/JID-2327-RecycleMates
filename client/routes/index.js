import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import CustomerHome from './CustomerHome';
import RegisterInfo from './RegisterInfo';
import Landing from './Landing';
import AccountType from './Account Type';
import Edit from './Edit';
import DriverHome from './DriverHome';
import ConfirmEmail from './ConfirmEmail';
import ForgotPass from './ForgotPass';
import ActivePickups from './ActivePickups';
import ActivePickupsDriver from './ActivePickupsDriver';
import AvailableRoutes from './Driver - Available Routes';
import BoxRequest from './BoxRequest';
import DescribeMaterial from './DescribeMaterial';
import SchedulePickups from './SchedulePickups';

const Stack = createNativeStackNavigator();

function RMRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Account Type' component={AccountType} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RegisterInfo' component={RegisterInfo} />
        <Stack.Screen name='CustomerHome' component={CustomerHome} />
        <Stack.Screen name='Edit' component={Edit} />
        <Stack.Screen name='DriverHome' component={DriverHome} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
        <Stack.Screen name='ForgotPass' component={ForgotPass} />
        <Stack.Screen name='ActivePickups' component={ActivePickups} />
        <Stack.Screen name='AvailableRoutes' component={AvailableRoutes} />
        <Stack.Screen name='BoxRequest' component={BoxRequest} />
        <Stack.Screen name='ActivePickupsDriver' component={ActivePickupsDriver} />
        <Stack.Screen name='DescribeMaterial' component={DescribeMaterial} />
        <Stack.Screen name='SchedulePickups' component={SchedulePickups} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RMRoutes;
