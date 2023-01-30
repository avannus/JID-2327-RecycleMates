/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';

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
      <RMText>Welcome to Recycle Mates!</RMText>
      <Button
        label='Join Us!'
        onPress={() => {
          navigation.navigate('Register');
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
