import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function Register({ route, navigation }) {
  const [email, setEmail] = React.useState('');
  const [confirmEmail, setConfirmEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Register</RMText>
      <RMTextInput
        label='Email1'
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        onChangeText={(newText) => setEmail(newText)}
      />
      <RMTextInput
        label='Email2'
        placeholder='Confirm Email'
        keyboardType='email-address'
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        onChangeText={(newText) => setConfirmEmail(newText)}
      />
      <RMTextInput
        label='Password1'
        placeholder='Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='new-password'
        textContentType='password'
        onChangeText={(newText) => setPassword(newText)}
      />
      <RMTextInput
        label='Password2'
        placeholder='Confirm Password'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='password'
        textContentType='password'
        onChangeText={(newText) => setConfirmPassword(newText)}
      />
      <RMButton
        theme='primary'
        label='Continue'
        onPress={() => {
          console.log('here');
          // TODO: confirm email and password match here
          const regInfo = {
            email,
            confirmEmail,
            password,
            confirmPassword,
            accountType: route.params.accountType,
          };

          if (email === confirmEmail && password === confirmPassword) {
            if (email.length === 0 || password.length === 0) {
              setErrorMessage('Emails or passwords cannot be empty.');
            } else {
              navigation.push('RegisterInfo', regInfo);
            }
          } else {
            setErrorMessage('Emails and passwords must match.');
          }
        }}
      />

      {errorMessage && <RMText style={{ color: 'red' }}>{errorMessage}</RMText>}

    </View>
  );
}

Register.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Register;
