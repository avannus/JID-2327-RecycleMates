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
        //justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Current Pickup Frequency: (frequency)</RMText>
      <RMText>Your next pickup is on (date)</RMText>
    </View>
  );
}

export default ActivePickups;
