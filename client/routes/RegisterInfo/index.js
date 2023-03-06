/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
import { SERVER } from 'RMenv';

function Register({ route, navigation }) {
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [address, setAddress] = React.useState();
  const [city, setCity] = React.useState();
  const [zip, setZip] = React.useState();

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
        onChangeText={(newText) => setZip(newText)}
      />
      <RMButton
        theme='primary'
        label='Create Account!'
        onPress={async () => {
          // TODO: Add validation
          const regInfo = {
            username: route.params.email,
            email: route.params.email,
            password: route.params.password,
            firstName,
            lastName,
            address,
            city,
            zip,
            accountType: route.params.accountType,
          };
          fetch(`${SERVER}user/create`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(regInfo),
          }).then((response) => {
            // TODO update API to send back just needed info for confirm email screen, update navigation call
            console.log(JSON.stringify(response));
            navigation.navigate('ConfirmEmail', regInfo);
          });
        }}
      />
    </View>
  );
}

export default Register;
