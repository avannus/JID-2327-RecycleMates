/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';

// Buttons are overflowing
// UPDATE: I fixed it on my phone screen by making the width 440 for the buttons container, 
// which was the lowest it could go without overflowing
// I think the lowest we need to design for is 320 pixels so I need to find another solution
// Buttons need to navigate to pages
// Make buttons match Figma
// Add the navigation bar at the bottom
// Maybe update driver messages
function DriverHome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <View style={styles.header}>
        <RMText style={{ color: '#ffffff', fontSize: 40 }}>
          Confirm a pickup
        </RMText>
        <RMText style={{ color: '#ffffff' }}>
        RecycleMates customers are currently waiting for their recyclables to be picked up.
        </RMText>
        <Button
          label='View Available Routes'
          onPress={() => navigation.navigate(null)}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 440,
          backgroundColor: RMStyle.colors.background,
        }}
      >
        <Button
          label='View Available Routes'
          onPress={() => navigation.navigate('AvailableRoutes')}
        />
        <Button
          label='Begin Next Route'
          onPress={() => navigation.navigate(null)}
        />
        <Button
          label='Request Assignment Changes'
          onPress={() => navigation.navigate(null)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <RMText style={{ fontSize: 40 }}>Current Routes</RMText>
        <RMText>Monday, 4pm-8pm</RMText>
        <RMText>Thursday, 8am-12pm</RMText>
      </View>
      <View style={{ flex: 0.7 }}>
        <Button
          label='Edit Account Info'
          onPress={() => {
            navigation.navigate('Edit');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#399431',
  },
});

export default DriverHome;
