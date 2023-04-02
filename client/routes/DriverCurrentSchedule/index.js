import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function DriverCurrentSchedule({ navigation }) {
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
          fontSize: 25,
          textAlign: 'center',
        }}
      >
        Your Current Schedules and Pickups
      </RMText>
      <RMText>Monday 2 - 3pm : 2 pickups</RMText>
      <RMText>Tuesday 4-5pm : 1 pickup</RMText>
      <RMText>Wednesday 9 - 11am : 3 pickups</RMText>

      <Button label='Go back' onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

DriverCurrentSchedule.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverCurrentSchedule;
