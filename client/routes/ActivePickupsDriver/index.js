import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function ActivePickupsDriver({ navigation }) {
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
        Active Pickups
      </RMText>

      <RMText>(Map Shown Here)</RMText>

      <Button
        label='Confirm Pickup'
        onPress={() => {
          navigation.navigate('Final Route');
        }}
      />
      <Button
        label='Drop off Recycled Goods'
        onPress={() => {
          navigation.navigate('Drop Off Goods');
        }}
      />

      <Button
        label='Cancel Pickup'
        onPress={() => {
          navigation.navigate('Cancel Route');
        }}
      />
    </View>
  );
}

ActivePickupsDriver.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ActivePickupsDriver;

