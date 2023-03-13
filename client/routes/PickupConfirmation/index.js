import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';

function PickupConfirmation({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Your pickup frequency has been scheduled!</RMText>
      <RMText>(display pickup frequency)</RMText>
      <RMButton
        theme='primary'
        label='Return Home'
        onPress={() => {
          navigation.navigate('CustomerHome');
        }}
      />
    </View>
  );
}

export default PickupConfirmation;
