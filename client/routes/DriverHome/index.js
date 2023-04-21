import * as React from 'react';
import { StyleSheet, View, ScrollView, Pressable, Text } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faMap,
  faMapLocationDot,
  faRoute,
} from '@fortawesome/free-solid-svg-icons';
import exampleSchedule from '../exampleScheduleData';

function DriverHome({ navigation }) {
  const currentWeek = exampleSchedule[0];
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();
      }),
    [navigation],
  );

  return (
    <ScrollView style={{ backgroundColor: RMStyle.colors.background }}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <RMText style={styles.bannerTitle}>Confirm a pickup</RMText>
            <RMText style={styles.bannerText}>
              RecycleMates customers are currently waiting for their recyclables
              to be picked up!
            </RMText>
            <Pressable
              style={styles.bannerButton}
              onPress={() => navigation.navigate('DriverCurrentPickup')}
            >
              <Text style={styles.bannerButtonLabel}>
                {'Begin your next pickup'}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('DriverCurrentSchedule')}
          >
            <FontAwesomeIcon icon={faMapLocationDot} size={50} />
            <Text style={styles.buttonText}>{'View Current Schedule'}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('DriverCurrentPickup')}
          >
            <FontAwesomeIcon icon={faRoute} size={50} />
            <Text style={styles.buttonText}>{'Begin Next Pickup'}</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonStyle, { height: 110 }]}
            onPress={() => navigation.navigate('RequestScheduleChanges')}
          >
            <FontAwesomeIcon icon={faMap} size={50} />
            <Text style={styles.buttonText}>{'Request Schedule Changes'}</Text>
          </Pressable>
        </View>
        <View style={styles.currentScheduleContainer}>
          <View style={styles.currentScheduleTitle}>
            <RMText
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}
            >
              Current Schedule
            </RMText>
            <Pressable
              onPress={() => navigation.navigate('DriverCurrentSchedule')}
            >
              <Text style={{ fontSize: 12, color: 'rgba(50, 57, 65, 0.38)' }}>
                {'see more >'}
              </Text>
            </Pressable>
          </View>
          <ScrollView style={styles.currentScheduleList}>
            {currentWeek.days.map((day, index) => (
              <RMText
                key={index}
              >{`${day.dayOfWeek}, ${day.timePeriod}`}</RMText>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

DriverHome.propTypes = {
  navigation: PropTypes.object.isRequired,
};

// DriverHome.navigationOptions = {
//   gestureEnabled: false,
//   gestureDirection: 'horizontal',
// };

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
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  bannerButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    width: 200,
  },
  bannerButtonLabel: {
    alignItems: 'center',
    color: 'black',
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
    width: '100%',
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
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
  currentScheduleContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 100,
    height: '30%',
    maxHeight: 300,
  },
  currentScheduleTitle: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  currentScheduleList: {
    persistentScrollbar: 'true',
    showsVerticalScrollIndicator: 'true',
  },
});

export default DriverHome;
