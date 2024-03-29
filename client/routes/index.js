import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import Landing from './Landing';
import AccountType from './AccountType';
import Register from './Register';
import RegisterInfo from './RegisterInfo';
import ConfirmEmail from './ConfirmEmail';
import Login from './Login';
import ForgotPass from './ForgotPass';
import CustomerHome from './CustomerHome';
import DriverHome from './DriverHome';
import DriverCurrentPickup from './DriverCurrentPickup';
import DriverCurrentSchedule from './DriverCurrentSchedule';
import RequestScheduleChanges from './RequestScheduleChanges';
import Settings from './Settings';
import EditAccount from './EditAccount';
import FAQ from './Faq';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function CustomerTabs() {
  return (
    <Tab.Navigator initialRoute={{ screen: 'Home' }} backBehavior>
      <Tab.Screen
        name='Customer Home'
        component={CustomerHome}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
          tabBarLabel: 'Home',
          headerTitle: 'Customer Home',
        }}
      />
      <Tab.Screen
        name='Account'
        component={SettingsStack}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function DriverTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Tab.Screen
        name='Home'
        component={DriverHomeStack}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
        }}
      />
      <Tab.Screen
        name='Account'
        component={SettingsStack}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
        }}
      />
    </Tab.Navigator>
  );
}

function DriverHomeStack() {
  return (
    <Stack.Navigator initialRouteName='DriverHome'>
      <Stack.Screen
        name='DriverHome'
        component={DriverHome}
        options={{
          title: 'Driver Home',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name='DriverCurrentPickup'
        component={DriverCurrentPickup}
        options={{ title: 'Current Pickup' }}
      />
      <Stack.Screen
        name='DriverCurrentSchedule'
        component={DriverCurrentSchedule}
        options={{ title: 'Current Schedule' }}
      />
      <Stack.Screen
        name='RequestScheduleChanges'
        component={RequestScheduleChanges}
        options={{ title: 'Request Schedule Changes' }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName='Settings'>
      <Stack.Screen name='Settings' component={Settings} />
      <Stack.Screen name='FAQ' component={FAQ} />
      <Stack.Screen
        name='EditAccount'
        component={EditAccount}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
          title: 'Edit Account',
        }}
      />
    </Stack.Navigator>
  );
}

function RMRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen
          name='Landing'
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Account Type'
          component={AccountType}
          options={{ title: 'Account Type' }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            title: 'Register Account',
          }}
        />
        <Stack.Screen
          name='RegisterInfo'
          component={RegisterInfo}
          options={{
            title: 'Account Info',
          }}
        />
        <Stack.Screen
          name='ConfirmEmail'
          component={ConfirmEmail}
          options={{
            title: 'Confirm Email',
          }}
        />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name='ForgotPass'
          component={ForgotPass}
          options={{
            title: 'Reset Password',
          }}
        />
        <Stack.Screen
          name='CustomerHome'
          component={CustomerTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name='DriverHome'
          component={DriverTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name='DriverCurrentPickup'
          component={DriverCurrentPickup}
        />
        <Stack.Screen
          name='DriverCurrentSchedule'
          component={DriverCurrentSchedule}
        />
        <Stack.Screen
          name='RequestScheduleChanges'
          component={RequestScheduleChanges}
        />
        <Stack.Screen name='EditAccount' component={EditAccount} />
        <Stack.Screen name='FAQ' component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RMRoutes;
