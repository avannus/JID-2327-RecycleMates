import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function DriverCurrentPickup({ navigation }) {
  const startDelivery = () => {
    navigation.navigate('DriverPickupInProgress');
  };

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
        Status: Not Begun
      </RMText>

      <RMText>(Map Shown Here)</RMText>

      <Button label='Start Pickup' onPress={startDelivery} />

      <Button
        label='Cancel Pickup'
        onPress={() => {
          navigation.navigate('InProgress');
        }}
      />
    </View>
  );
}

DriverCurrentPickup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverCurrentPickup;
