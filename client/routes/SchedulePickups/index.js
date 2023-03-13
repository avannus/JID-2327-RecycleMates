import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
import PropTypes from 'prop-types';

function SchedulePickups({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Schedule a Pickup</RMText>
      <RMText>
        Select how often you would like your recyclables to be picked up:
      </RMText>

      <select name='pickup-frequency' id='pickup-frequency'>
        <option value='weekly'>Weekly</option>
        <option value='biweekly'>Biweekly</option>
        <option value='monthly'>Monthly</option>
        <option value='bimonthly'>Bimonthly</option>
      </select>

      <RMButton
        theme='primary'
        label='Confirm'
        onPress={() => {
          navigation.navigate('PickupConfirmation');
        }}
      />
    </View>
  );
}

SchedulePickups.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SchedulePickups;
