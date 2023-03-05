/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';

// The page keeps bouncing back up on iOS when you scroll down
// Buttons need to navigate to pages
// Make buttons match Figma
// Add the navigation bar at the bottom
// Maybe update driver messages
function DriverHome({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <RMText style={{ color: '#ffffff', fontSize: 40 }}>
          Confirm a pickup
        </RMText>
        <RMText style={{ color: '#ffffff' }}>
          Recycle Mates customers are currently waiting for their recyclables to
          be picked up.
        </RMText>
        <Button
          label='Your Current Active Pickups'
          onPress={() => {
            navigation.navigate('Active Pickups');
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
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
      <View style={styles.currentRoutes}>
        <RMText style={{ fontSize: 40 }}>Current Routes</RMText>
        <RMText>Monday, 4pm-8pm</RMText>
        <RMText>Thursday, 8am-12pm</RMText>
      </View>
      <View style={{ backgroundColor: RMStyle.colors.background }}>
        <Button
          label='Edit Account Info'
          onPress={() => {
            navigation.navigate('Edit');
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#399431',
    justifyContent: 'center',
    height: '40%',
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
  currentRoutes: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
});

export default DriverHome;
