import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

// Buttons are overflowing
// UPDATE: I fixed it on my phone screen by making the width 440 for the buttons container,
// which was the lowest it could go without overflowing
// I think the lowest we need to design for is 320 pixels so I need to find another solution
// Buttons need to navigate to pages
// Make buttons match Figma
// Add the navigation bar at the bottom
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
      <View style={styles.header}>
        <RMText style={{ color: '#ffffff', fontSize: 40 }}>
          Schedule a pickup
        </RMText>
        <RMText style={{ color: '#ffffff' }}>
          Local drivers are available and ready to pickup your recyclable
          packages with RecycleMates
        </RMText>
        <Button
          label='Schedule Now'
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
          label='Request boxes'
          onPress={() => navigation.navigate(null)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <RMText style={{ fontSize: 40 }}>Current Pickups</RMText>
        <RMText>Monday, 6 pm - 8 pm</RMText>
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

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#399431',
  },
});

export default Home;
