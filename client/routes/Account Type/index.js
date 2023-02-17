import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function AccountType({ navigation }) {
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
            justifyContent: 'center',
            fontSize: 36,
            marginBottom: 100,
            textAlign: 'center',

        }}
        >
        Choose Account Type
        </RMText>

        <Button
            label='I am a Customer'
            onPress={() => {
            navigation.navigate('Register');
            }}
        />
        <Button
            label='I am a Driver'
            onPress={() => {
            navigation.navigate('Register');
            }}
        />
    </View>
  );
}

export default AccountType;
