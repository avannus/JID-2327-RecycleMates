import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function ActivePickups({ navigation }) {
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
            navigation.navigate('Dropoff Goods');
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

export default ActivePickups;

