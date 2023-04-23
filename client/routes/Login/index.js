import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
import PropTypes from 'prop-types';

function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
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
        label='Email'
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        onChangeText={(newText) => setEmail(newText)}
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
          if (!password || !email) {
            return;
          }

          if (email.startsWith('d')) {
            navigation.push('DriverHome');
          } else {
            navigation.push('CustomerHome');
          }
        }}
      />
      <Button
        label='Forgot Password?'
        onPress={() => {
          navigation.push('ForgotPass');
        }}
      />
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Login;
