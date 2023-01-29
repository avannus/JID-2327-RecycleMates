/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/RMButton';

function Entry({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Recycle Mates!</Text>
      <Button
        label='Join Us!'
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
      <Button
        label='Login'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
}

export default Entry;
