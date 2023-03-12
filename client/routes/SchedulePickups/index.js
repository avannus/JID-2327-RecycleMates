import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function SchedulePickups() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Schedule a pickup</RMText>
      <RMText>Select how often you would like your recyclables picked up.</RMText>
      <select name="pickup-frequency" id="pickup-frequency">
        <option value="weekly">Weekly</option>
        <option value="biweekly">Biweekly</option>
        <option value="monthly">Monthly</option>
        <option value="bimonthly">Bimonthly</option>
      </select>
    </View>
  );
}

export default SchedulePickups;
