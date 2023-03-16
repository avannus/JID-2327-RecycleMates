import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

// Buttons need to navigate to pages
// Make buttons match Figma
// Add the navigation bar at the bottom
function CustomerHome({ navigation }) {
  return (
    <ScrollView styles={styles.container}>
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
          onPress={() => navigation.navigate('SchedulePickups')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          label='Schedule Pickup'
          onPress={() => navigation.navigate('SchedulePickups')}
        />
        <Button
          label='Cancel Pickup'
          onPress={() => navigation.navigate('CancelPickup')}
        />
        <Button
          label='Current Pickups'
          onPress={() => navigation.navigate('ActivePickups')}
        />
        <Button
          label='Request Boxes'
          onPress={() => navigation.navigate('BoxRequest')}
        />
      </View>
      <View style={styles.currentPickups}>
        <RMText style={{ fontSize: 40 }}>Current Pickups</RMText>
        <RMText>Monday, 6 pm - 8 pm</RMText>
      </View>
      <View style={styles.footer}>
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

CustomerHome.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: RMStyle.colors.background,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#399431',
    justifyContent: 'center',
    height: 300,
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
  footer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
  },
});

export default CustomerHome;
