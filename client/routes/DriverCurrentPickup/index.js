import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMPopup from '../../components/RMPopup';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import exampleSchedule from '../exampleScheduleData';

function DriverCurrentPickup({ navigation }) {
  const [confirmPopupVisible, setConfirmPopupVisible] = React.useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = React.useState(false);
  const [finishPopup, setFinishPopup] = React.useState(false);

  const [scheduleData, setScheduleData] = React.useState(exampleSchedule);
  const [status, setStatus] = React.useState('Not Begun');
  const [region, setRegion] = React.useState({
    latitude: 36.6499974,
    longitude: -87.4666648,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const { API_KEY } = process.env;
  const currentAddress
    = scheduleData.length > 0
    && scheduleData[0].days.length > 0
    && scheduleData[0].days[0].addresses.length > 0
      ? scheduleData[0].days[0].addresses[0]
      : 'No address found';

  const startPickup = () => {
    setStatus('In Progress');
  };

  const markComplete = () => {
    setStatus('Complete');
    if (scheduleData[0].days[0].numOfPickups === 1) {
      setFinishPopup(true);
    }
  };

  const beginNextPickup = () => {
    const updatedData = [...scheduleData];
    const dayToUpdate = updatedData[0].days[0];

    dayToUpdate.numOfPickups -= 1;
    dayToUpdate.addresses.shift();

    const pickupsLeft = dayToUpdate.numOfPickups > 0;

    setStatus('Not Begun');

    if (!pickupsLeft) {
      // updatedData[0].days.shift();
      setFinishPopup(true);
    }

    setScheduleData(updatedData);
  };

  const cancelPickup = () => {
    setConfirmPopupVisible(false);
    setStatus('Cancelled');
    setSuccessPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      <RMPopup
        visible={confirmPopupVisible}
        onRequestClose={() => {
          setConfirmPopupVisible(false);
        }}
        description={'Are you sure you want to cancel this pickup?'}
        buttonOneText={'Dismiss'}
        buttonOneFunction={() => {
          setConfirmPopupVisible(false);
        }}
        buttonTwoText={'Confirm'}
        buttonTwoFunction={cancelPickup}
      />

      <RMPopup
        visible={successPopupVisible}
        onRequestClose={() => {
          setSuccessPopupVisible(false);
          if (scheduleData[0].days[0].numOfPickups === 1) {
            setFinishPopup(true);
          }
        }}
        description='This pickup has been cancelled successfully.'
      />

      <RMPopup
        visible={finishPopup}
        onRequestClose={() => {
          beginNextPickup();
          setFinishPopup(false);
          navigation.push('DriverHome');
        }}
        xVisibility={false}
        description={
          'You have completed all your pickups for today.\n\nThank you for making the world a healthier place for us all!'
        }
        buttonOneText={'Return Home'}
        buttonOneFunction={() => {
          beginNextPickup();
          setFinishPopup(false);
          navigation.push('DriverHome');
        }}
      />

      <View style={{ flex: 1 }}>
        <RMText
          style={{
            justifyContent: 'center',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Pickup Address:</Text>{' '}
          {currentAddress}
        </RMText>
        {currentAddress !== 'No address found' && (
          <RMText style={{ justifyContent: 'center', fontSize: 20 }}>
            <Text style={{ fontWeight: 'bold' }}>Status:</Text> {status}
          </RMText>
        )}
      </View>

      <GooglePlacesAutocomplete
        placeholder='Search for pickup addresses'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: API_KEY,
          language: 'en',
          components: 'country:us',
          radius: 10000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0.6,
            position: 'relative',
            width: '100%',
            zIndex: 1,
          },
          listView: { backgroundColor: 'white' },
        }}
      />

      <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor='green'
        >
          <Callout>
            <Text>Pickup Location</Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: 36.6499974, longitude: -87.4666648 }}
          pinColor='red'
        >
          <Callout>
            <Text>Fort Campbell</Text>
          </Callout>
        </Marker>
      </MapView>

      {currentAddress !== 'No address found' && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            flex: 0.75,
          }}
        >
          {status === 'Not Begun' && (
            <Button label='Start Pickup' onPress={startPickup} width={150} />
          )}

          {status === 'In Progress' && (
            <Button label='Mark Complete' onPress={markComplete} width={150} />
          )}

          {(status === 'Not Begun' || status === 'In Progress') && (
            <Button
              label='Cancel Pickup'
              onPress={() => {
                setConfirmPopupVisible(true);
              }}
              width={150}
            />
          )}

          {(status === 'Complete' || status === 'Cancelled') && (
            <Button
              label='Begin Next Pickup'
              onPress={beginNextPickup}
              width={150}
            />
          )}

          {(status === 'Complete' || status === 'Cancelled') && (
            <Button
              label='Return Home'
              onPress={() => {
                beginNextPickup();
                navigation.push('DriverHome');
              }}
              width={150}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
  },
  map: {
    width: '100%',
    height: '50%',
  },
});

DriverCurrentPickup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverCurrentPickup;
