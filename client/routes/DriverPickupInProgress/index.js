import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function DriverPickupInProgress({ navigation }) {
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
          textAlign: 'center',
        }}
      >
        Current Pickup
      </RMText>
      <RMText
        style={{ justifyContent: 'center', fontSize: 20, marginBottom: 100 }}
      >
        Status: In Progress
      </RMText>

      <RMText>(Map Shown Here)</RMText>

      <Button
        label='Mark Complete'
        onPress={() => {
          navigation.navigate('DriverPickupComplete'); // Removed drop-off materials to recycling facility
        }}
      />

      <Button
        label='Cancel Pickup'
        onPress={() => {
          navigation.navigate('InProgress');
        }}
      />
    </View>
  );
}

DriverPickupInProgress.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverPickupInProgress;
