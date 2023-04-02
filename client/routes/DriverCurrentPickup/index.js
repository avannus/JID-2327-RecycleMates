import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function DriverCurrentPickup({ navigation }) {
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
          marginBottom: 100,
          textAlign: 'center',

        }}
      >
        Current Pickup
      </RMText>

      <RMText>(Map Shown Here)</RMText>

      <Button
        label='Start delivery'
        onPress={() => {
          navigation.navigate('InProgress');
        }}
      />
      <Button
        label='End delivery'
        onPress={() => {
          navigation.navigate('InProgress'); // Removed drop-off materials to recycling facility
        }}
      />

      <Button
        label='Cancel delivery'
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

