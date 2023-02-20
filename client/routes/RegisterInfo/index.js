/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';

function Register({ route, navigation }) {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [address, setAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [zipCode, setZipCode] = React.useState();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Account Info</RMText>
      <RMTextInput
        label='First Name'
        placeholder='First Name'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='name'
        textContentType='name'
        onChangeText={(newText) => setFirstName(newText)}
      />
      <RMTextInput
        label='Last Name'
        placeholder='Last Name'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='name'
        textContentType='name'
        onChangeText={(newText) => setLastName(newText)}
      />
      <RMTextInput
        label='Address'
        placeholder='Pickup Street Address'
        keyboardType='default'
        autoCapitalize='words'
        autoCompleteType='street-address'
        textContentType='streetAddressLine1'
        onChangeText={(newText) => setAddress(newText)}
      />
      <RMTextInput
        label='City'
        placeholder='Pickup City'
        keyboardType='default'
        autoCapitalize='words'
        textContentType='addressCity'
        onChangeText={(newText) => setCity(newText)}
      />
      <RMTextInput
        label='Zip Code'
        placeholder='Pickup Zip Code'
        keyboardType='numeric'
        autoCapitalize='words'
        autoCompleteType='postal-code'
        textContentType='postalCode'
        onChangeText={(newText) => setZipCode(newText)}
      />
      <RMButton
        theme='primary'
        label='Create Account!'
        onPress={() => {
          // TODO: Add validation
          const regInfo = {
            firstName,
            lastName,
            address,
            city,
            zipCode,
            email: route.params.email,
            password: route.params.password,
            accountType: route.params.accountType,
          };
          // TODO: api call to create account
          // TODO: prompt the user to verify their email
          navigation.navigate('ConfirmEmail', regInfo);
        }}
      />
    </View>
  );
}

export default Register;
