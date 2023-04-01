import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function DriverPickupComplete({ navigation }) {
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
        Status: Complete ✔️
      </RMText>

      <RMText>(Map Shown Here)</RMText>

      {/* <View style={{ width: '80%' }}>
        <RMText style={{ textAlign: 'center', fontSize: 20 }}>
          Thank you for making the world a healthier place for us all!
        </RMText>
      </View> */}

      <Button
        label='Begin Next Pickup'
        onPress={() => {
          navigation.navigate('DriverCurrentPickup');
        }}
      />

      <Button
        label='Return Home'
        onPress={() => {
          navigation.navigate('DriverHome');
        }}
      />
    </View>
  );
}

DriverPickupComplete.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverPickupComplete;
