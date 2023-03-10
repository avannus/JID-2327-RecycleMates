import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function ActivePickups() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Active Pickups:</RMText>
      <RMText>First Active Pickup: (date + time)</RMText>
      <RMText>Second Active Pickup: (date + time)</RMText>
      <RMText>Third Active Pickup: (date + time)</RMText>
    </View>
  );
}

export default ActivePickups;
