import * as React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBox,
  faCalendarDays,
  faTruckPickup,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

// Add the navigation bar at the bottom
function CustomerHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.banner}>
          <RMText style={{ color: '#ffffff', fontSize: 40, fontWeight: 'bold' }}>
            Schedule a pickup
          </RMText>
          <RMText style={{ color: '#ffffff', fontSize: 20, paddingBottom: 10 }}>
            Local drivers are ready to pickup your recyclable
            packages with RecycleMates ♽
          </RMText>
          <Pressable
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 50,
              alignItems: 'center',
              width: 200,
              height: 50,
              justifyContent: 'center',
              // shadowColor: RMStyle.colors.button.shadow,
              // shadowOffset: { width: 1, height: 5 },
            }} onPress={() => navigation.navigate('DescribeMaterial')}
          >
            <Text
              style={{
                color: '#000000',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              {'Confirm your next pickup'}
            </Text>
          </Pressable>
          {/* <Button
            label='Confirm Your Next Pickup'
            onPress={() => navigation.navigate('DescribeMaterial')}
          /> */}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('SchedulePickups')}
        >
          <FontAwesomeIcon icon={faCalendarDays} size={50} />
          <Text
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              textAlign: 'center',
              fontSize: 15,
              paddingTop: 5,
            }}
          >
            {'Change Frequency'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('CancelPickup')}
        >
          <FontAwesomeIcon icon={faCircleXmark} size={50} />
          <Text
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              textAlign: 'center',
              fontSize: 15,
              paddingTop: 5,
              width: 97,
            }}
          >
            {'Cancel Pickup'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('ActivePickups')}
        >
          <FontAwesomeIcon icon={faTruckPickup} size={50} />
          <Text
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              textAlign: 'center',
              fontSize: 15,
              paddingTop: 5,
            }}
          >
            {'Current Pickups'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('BoxRequest')}
        >
          <FontAwesomeIcon icon={faBox} size={50} />
          <Text
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
              textAlign: 'center',
              fontSize: 15,
              paddingTop: 5,
            }}
          >
            {'Request Boxes'}
          </Text>
        </Pressable>
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
    </View>
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
  bannerContainer: {
    alignItems: 'center',
    backgroundColor: '#399431',
    justifyContent: 'center',
    height: 300,
    width: '100%',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 25,
    width: '60%',
    alignSelf: 'center',
  },
  buttonStyle: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
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
