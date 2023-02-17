/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, Image } from 'react-native';
import Button from '../../components/RMButton';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
const recyclingLogo = require('../../assets/recycling-symbol.png');

function Landing({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText
        style={{
          fontSize: 36,
          padding: 0,
          textAlign: 'center',
        }}
      >
        Welcome to{'\n'}RecycleMates
      </RMText>
      <Image
        source={recyclingLogo}
        style={{
          resizeMode: 'contain',
          objectFit: 'center',
          padding: 100,
          width: 100,
          height: 100
        }}
      />
      <RMText
        style={{
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Join us in our quest{'\n'}to make a better world!
        </RMText>
      <Button
        label='Join Us!'
        onPress={() => {
          navigation.navigate('Account Type');
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

export default Landing;
