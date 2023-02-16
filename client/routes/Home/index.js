/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';

// TODO: Buttons need to navigate to pages
function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Schedule a pickup!</RMText>
      <RMText>
        Local drivers are available and ready to pickup your recyclable packages
        with RecycleMates
      </RMText>
      <Button label='Schedule Now!' onPress={() => navigation.navigate(null)} />
      <Button
        label='Schedule Pickup'
        onPress={() => navigation.navigate(null)}
      />
      <Button label='Cancel Pickup' onPress={() => navigation.navigate(null)} />
      <Button
        label='Current Pickups'
        onPress={() => navigation.navigate(null)}
      />
      <Button label='Request boxes' onPress={() => navigation.navigate(null)} />
      <RMText>Current Pickups</RMText>
      <RMText>Monday, 6:00 pm - 8:00 pm</RMText>
      <Button
        label='Edit Account Info'
        onPress={() => {
          navigation.navigate('Edit');
        }}
      />
    </View>
  );
}

export default Home;
