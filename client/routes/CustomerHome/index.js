import * as React from 'react';
import { StyleSheet, View, Pressable, Text, ScrollView } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBox,
  faCalendarDays,
  faTruckPickup,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

// Call pickups from backend and list them
// Try to make pickups line up from the left
// Add up pop ups with information when you click on a pickup (?)
function CustomerHome({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: RMStyle.colors.background }}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <RMText style={styles.bannerTitle}>Schedule a pickup</RMText>
            <RMText style={styles.bannerText}>
              Local drivers are available and ready to pickup your recyclable
              packages with RecycleMates! ♻️
            </RMText>
            <Pressable
              style={styles.bannerButton}
              onPress={() => navigation.navigate('DescribeMaterial')}
            >
              <Text style={styles.bannerButtonLabel}>
                {'Confirm your next pickup'}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('SchedulePickups')}
          >
            <FontAwesomeIcon icon={faCalendarDays} size={50} />
            <Text style={[styles.buttonText]}>{'Change Frequency'}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('CancelPickup')}
          >
            <FontAwesomeIcon icon={faCircleXmark} size={50} />
            <Text style={[styles.buttonText, { width: 97 }]}>
              {'Cancel Pickup'}
            </Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('ActivePickups')}
          >
            <FontAwesomeIcon icon={faTruckPickup} size={50} />
            <Text style={styles.buttonText}>{'Current Pickups'}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('BoxRequest')}
          >
            <FontAwesomeIcon icon={faBox} size={50} />
            <Text style={styles.buttonText}>{'Request Boxes'}</Text>
          </Pressable>
        </View>
        <View style={styles.currentPickupsContainer}>
          <View style={styles.currentPickupsTitle}>
            <RMText
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              Current Pickups
            </RMText>
            <Pressable onPress={() => navigation.navigate('ActivePickups')}>
              <Text style={{ fontSize: 12, color: 'rgba(50, 57, 65, 0.38)' }}>
                {'see more >'}
              </Text>
            </Pressable>
          </View>
          <ScrollView style={styles.currentPickupsList}>
            <RMText>Monday, 1 pm - 2 pm</RMText>
            <RMText>Tuesday, 3 pm - 4 pm</RMText>
          </ScrollView>
        </View>
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
  bannerContainer: {
    alignItems: 'center',
    backgroundColor: '#399431',
    justifyContent: 'center',
    height: '50%',
    maxHeight: 300,
    width: '100%',
  },
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerText: {
    color: '#ffffff',
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  bannerButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: 'center',
  },
  bannerButtonLabel: {
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    width: '60%',
    alignSelf: 'center',
  },
  buttonStyle: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 5,
  },
  currentPickupsContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 100, // to allow user to scroll to bottom of pickup list
    height: '30%',
    maxHeight: 300,
  },
  currentPickupsTitle: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  currentPickupsList: {
    persistentScrollbar: 'true',
    showsVerticalScrollIndicator: 'true',
  },
});

export default CustomerHome;
