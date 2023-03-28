import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function ActivePickups({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Current Pickup Frequency: (frequency)</RMText>
      <RMText>Your next pickup is on (date)</RMText>
      <Button label='Cancel Pickup' onPress={() => navigation.navigate('CancelPickup')}></Button>
    </View>
  );
}

ActivePickups.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ActivePickups;
