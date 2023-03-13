import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function PickupConfirmation() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Confirm Pickup</RMText>
    </View>
  );
}

export default PickupConfirmation;
