import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
import PropTypes from 'prop-types';

function Login({ navigation }) {
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
        label='Email'
        placeholder='Email'
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
          // TODO api call
          const homeScreenInfo = {
            firstName: 'John',
            city: 'Default City',
            accountType: 'customer',
          };
          if (homeScreenInfo.accountType === 'customer') {
            navigation.navigate('CustomerHome', homeScreenInfo);
          } else if (homeScreenInfo.accountType === 'driver') {
            navigation.navigate('DriverHome', homeScreenInfo);
          }
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
