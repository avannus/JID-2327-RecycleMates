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
function CustomerHome({ route, navigation }) {
  return (
    <ScrollView>
      <View style={styles.header}>
        <RMText style={{ color: '#ffffff', fontSize: 40 }}>
          Schedule a pickup
        </RMText>
        <RMText style={{ color: '#ffffff' }}>
          Local drivers are available and ready to pickup your recyclable
          packages with Recycle Mates
        </RMText>
        <Button
          label='Schedule Now'
          onPress={() => navigation.navigate(null)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label='Schedule Pickup'
          onPress={() => navigation.navigate(null)}
        />
        <Button
          label='Cancel Pickup'
          onPress={() => navigation.navigate(null)}
        />
        <Button
          label='Current Pickups'
          onPress={() => navigation.navigate(null)}
        />
        <Button
          label='Request Boxes'
          onPress={() => navigation.navigate(null)}
        />
      </View>
      <View style={styles.currentPickups}>
        <RMText style={{ fontSize: 40 }}>Current Pickups</RMText>
        <RMText>Monday, 6 pm - 8 pm</RMText>
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
  currentPickups: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
});

export default CustomerHome;
