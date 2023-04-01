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
import CustomerCurrentPickup from './CustomerCurrentPickup';
import BoxRequest from './BoxRequest';
import CancelPickup from './CancelPickup';
import DescribeMaterial from './DescribeMaterial';
import PickupConfirmation from './PickupConfirmation';
import SchedulePickups from './SchedulePickups';
import DriverHome from './DriverHome';
import DriverCurrentPickup from './DriverCurrentPickup';
import DriverCurrentSchedule from './DriverCurrentSchedule';
import RequestScheduleChanges from './RequestScheduleChanges';
import EditAccount from './EditAccount';
import InProgress from './InProgress';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function CustomerTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={CustomerHomeStack}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
        }}
      />
      <Tab.Screen
        name='Account'
        component={EditAccount}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
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
        component={EditAccount}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
        }}
      />
    </Tab.Navigator>
  );
}

function CustomerHomeStack() {
  return (
    <Stack.Navigator initialRouteName='CustomerHome'>
      <Stack.Screen
        name='CustomerHome'
        component={CustomerHome}
        options={{
          title: 'Home',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name='CustomerCurrentPickup'
        component={CustomerCurrentPickup}
        options={{ title: 'Current Pickups' }}
      />
      <Stack.Screen
        name='BoxRequest'
        component={BoxRequest}
        options={{ title: 'Request Boxes' }}
      />
      <Stack.Screen
        name='CancelPickup'
        component={CancelPickup}
        options={{ title: 'Cancel a Pickup' }}
      />
      <Stack.Screen
        name='DescribeMaterial'
        component={DescribeMaterial}
        options={{ title: 'Describe Materials' }}
      />
      <Stack.Screen
        name='PickupConfirmation'
        component={PickupConfirmation}
        options={{ title: 'Pickup Confirmed' }}
      />
      <Stack.Screen
        name='SchedulePickups'
        component={SchedulePickups}
        options={{ title: 'Set Frequency' }}
      />
    </Stack.Navigator>
  );
}

function DriverHomeStack() {
  return (
    <Stack.Navigator initialRouteName='DriverHome'>
      <Stack.Screen
        name='DriverHome'
        component={DriverHome}
        options={{
          title: 'Home',
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

function RMRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={Landing} />
        <Stack.Screen name='Account Type' component={AccountType} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='RegisterInfo' component={RegisterInfo} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ForgotPass' component={ForgotPass} />
        <Stack.Screen
          name='CustomerHome'
          component={CustomerTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen name='CustomerCurrentPickup' component={CustomerCurrentPickup} />
        <Stack.Screen name='BoxRequest' component={BoxRequest} />
        <Stack.Screen name='CancelPickup' component={CancelPickup} />
        <Stack.Screen name='DescribeMaterial' component={DescribeMaterial} />
        <Stack.Screen
          name='PickupConfirmation'
          component={PickupConfirmation}
        />
        <Stack.Screen name='SchedulePickups' component={SchedulePickups} />
        <Stack.Screen
          name='DriverHome'
          component={DriverTabs}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name='DriverCurrentPickup'
          component={DriverCurrentPickup}
        />
        <Stack.Screen name='DriverCurrentSchedule' component={DriverCurrentSchedule} />
        <Stack.Screen
          name='RequestScheduleChanges'
          component={RequestScheduleChanges}
        />
        <Stack.Screen name='EditAccount' component={EditAccount} />
        <Stack.Screen name='InProgress' component={InProgress} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RMRoutes;
