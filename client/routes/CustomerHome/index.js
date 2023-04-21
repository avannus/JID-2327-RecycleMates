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
import customerData from '../exampleCustomerData';
import RMPickupScheduler from '../../components/RMPickupScheduler';
import RMUpcomingPickups from '../../components/RMUpcomingPickups';

function CustomerHome({ navigation }) {
  const [schedulerVisible, setSchedulerVisible] = React.useState(false);
  const [pickupsVisible, setPickupsVisible] = React.useState(false);
  const [data, setData] = React.useState(customerData);
  const [frequency, setFrequency] = React.useState('weekly');
  const day = data[frequency].dayOfTheWeek;
  const time = data[frequency].timePeriod;
  const nextPickup = data[frequency].dates[0];
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
      <RMPickupScheduler
        visible={schedulerVisible}
        onClose={() => setSchedulerVisible(false)}
        setFrequency={setFrequency}
      />
      <RMUpcomingPickups visible={pickupsVisible} onClose={() => setPickupsVisible(false)} frequency={frequency} data={data} setData={setData} />
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <View style={styles.banner}>
            <RMText style={styles.bannerTitle}>Schedule a pickup</RMText>
            <RMText style={styles.bannerText}>
              Local drivers are available and ready to pickup your recyclable
              packages with RecycleMates!
            </RMText>
            <Pressable
              style={styles.bannerButton}
              onPress={() => {
                setSchedulerVisible(true);
                // console.log(frequency);
              }}
            >
              <Text style={styles.bannerButtonLabel}>
                {'Schedule your pickup frequency'}
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              setSchedulerVisible(true);
            }}
          >
            <FontAwesomeIcon icon={faCalendarDays} size={50} />
            <Text style={[styles.buttonText]}>{'Set Pickup Frequency'}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => setPickupsVisible(true)}
          >
            <FontAwesomeIcon icon={faTruckPickup} size={50} />
            <Text style={styles.buttonText}>{'Upcoming Pickups'}</Text>
          </Pressable>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('BoxRequest', { frequency })}
          >
            <FontAwesomeIcon icon={faBox} size={50} />
            <Text style={styles.buttonText}>{'Request Boxes'}</Text>
          </Pressable>
        </View>
        <View style={styles.currentPickupsContainer}>
          <View
            style={{
              alignItems: 'center',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '80%',
            }}
          >
            <RMText
              style={{
                fontSize: 20,
                // fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Your pickups are currently scheduled to occur{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {frequency}</Text> on {day} during {time}.
            </RMText>
            <RMText
              style={{
                fontSize: 20,
                // fontWeight: 'bold',
                alignSelf: 'center',
                textAlign: 'center',
              }}
            >
              Your next pickup is scheduled for{' '}
              <Text style={{ fontWeight: 'bold' }}>{nextPickup}</Text>.
            </RMText>
            {/* <Pressable
              onPress={() => navigation.navigate('CustomerCurrentPickup')}
            >
              <Text style={{ fontSize: 20, color: 'rgba(50, 57, 65, 0.38)' }}>
                {'view more >'}
              </Text>
            </Pressable> */}
          </View>
          {/* <ScrollView style={styles.currentPickupsList}>
            <RMText>Monday, 1 pm - 2 pm</RMText>
            <RMText>Tuesday, 3 pm - 4 pm</RMText>
          </ScrollView> */}
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
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    width: '100%',
    paddingBottom: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  buttonText: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
  currentPickupsContainer: {
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5,
  },
});

export default CustomerHome;
