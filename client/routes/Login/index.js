/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
      <RMTextInput
        label='Username'
        placeholder='Username or Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
      />
      <RMTextInput
        label='Password'
        placeholder='Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='password'
        textContentType='password'
      />
      <Button
        theme='primary'
        label='Login'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

export default Login;
