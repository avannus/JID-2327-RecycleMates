/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Info</Text>
      <RMTextInput
        label='First Name'
        placeholder='First Name'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='name'
        textContentType='name'
      />
      <RMTextInput
        label='Last Name'
        placeholder='Last Name'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='name'
        textContentType='name'
      />
      <RMTextInput
        label='Address'
        placeholder='Pickup Street Address'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='street-address'
        textContentType='streetAddressLine1'
      />
      <RMTextInput
        label='City'
        placeholder='Pickup City'
        keyboardType='default'
        autoCapitalize='words'
        textContentType='addressCity'
      />
      <RMTextInput
        label='Zip Code'
        placeholder='Pickup Zip Code'
        keyboardType='numeric'
        autoCapitalize='words'
        autoCompleteType='postal-code'
        textContentType='postalCode'
      />
      <RMButton
        theme='primary'
        label='Create Account!'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

export default Register;