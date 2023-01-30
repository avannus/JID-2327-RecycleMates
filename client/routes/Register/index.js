/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register</Text>
      <RMTextInput
        label='Email1'
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
      />
      <RMTextInput
        label='Email2'
        placeholder='Confirm Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
      />
      <RMTextInput
        label='Password1'
        placeholder='Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='new-password'
        textContentType='password'
      />
      <RMTextInput
        label='Password2'
        placeholder='Confirm Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='password'
        textContentType='password'
      />
      <RMButton
        theme='primary'
        label='Register!'
        onPress={() => {
          navigation.navigate('RegisterInfo');
        }}
      />
    </View>
  );
}

export default Register;