import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
import PropTypes from 'prop-types';
import { SERVER } from 'RMenv';
import { currentLogin } from '../../currentLogin';

function Login({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Login</RMText>
      <RMTextInput
        label='Username or Email'
        placeholder='Username or Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        onChangeText={(newText) => setUsername(newText)}
      />
      <RMTextInput
        label='Password'
        placeholder='Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='password'
        textContentType='password'
        onChangeText={(newText) => setPassword(newText)}
      />
      <Button
        theme='primary'
        label='Login'
        onPress={() => {
          const loginObj = {
            username,
            password,
          };
          fetch(`${SERVER}user/login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(loginObj),
          })
            .then((response) => response.json())
            .then((body) => {
              console.log('body: ', body);
              if (body.accountType === 'customer') {
                currentLogin.username = username;
                currentLogin.password = password;
                navigation.navigate('CustomerHome');
              } else if (body.accountType === 'driver') {
                console.log('Logging in as driver');
                currentLogin.username = username;
                currentLogin.password = password;
                navigation.navigate('DriverHome');
              } else {
                console.log('invalid account type');
              }
            })
            .catch((error) => {
              // TODO handle failed login
              console.log('Error Logging in: ');
              console.log(error);
            });
        }}
      />
      <Button
        label='Forgot Password?'
        onPress={() => {
          navigation.navigate('ForgotPass');
        }}
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
