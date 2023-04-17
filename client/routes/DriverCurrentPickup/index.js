import * as React from 'react';
import { View, Modal, StyleSheet, Pressable, Text } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import exampleSchedule from '../exampleScheduleData';

// TODO: Include API key from .env
function DriverCurrentPickup({ navigation }) {
  const [status, setStatus] = React.useState('Not Begun');
  const [confirmPopupVisible, setConfirmPopupVisible] = React.useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = React.useState(false);
  const [region, setRegion] = React.useState({
    latitude: 36.6499974,
    longitude: -87.4666648,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [scheduleData, setScheduleData] = React.useState(exampleSchedule);
  const [finishPopup, setFinishPopup] = React.useState(false);
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
    const updatedData = [...scheduleData];
    const dayToUpdate = updatedData[0].days[0];
    const lastPickup = dayToUpdate.numOfPickups === 1;
    if (lastPickup) {
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
      updatedData[0].days.shift();
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
      <Modal
        animationType='slide'
        transparent={true}
        visible={confirmPopupVisible}
        onRequestClose={() => {
          setConfirmPopupVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setConfirmPopupVisible(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} size={15} />
              </Pressable>
            </View>
            <Text style={styles.modalText}>
              Are you sure you want to cancel this pickup?
            </Text>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{ paddingHorizontal: 5 }}>
                <Pressable
                  style={{
                    backgroundColor: '#D3D3D3',
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                  }}
                  onPress={() => {
                    setConfirmPopupVisible(false);
                  }}
                >
                  <Text style={{ color: 'black' }}>Dismiss</Text>
                </Pressable>
              </View>
              <View style={{ paddingHorizontal: 5 }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={cancelPickup}
                >
                  <Text style={styles.textStyle}>Confirm</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType='slide'
        transparent={true}
        visible={successPopupVisible}
        onRequestClose={() => {
          setSuccessPopupVisible(false);
          const updatedData = [...scheduleData];
          const dayToUpdate = updatedData[0].days[0];
          const lastPickup = dayToUpdate.numOfPickups === 1;
          if (lastPickup) {
            setFinishPopup(true);
          }
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setSuccessPopupVisible(false);
                  const updatedData = [...scheduleData];
                  const dayToUpdate = updatedData[0].days[0];
                  const lastPickup = dayToUpdate.numOfPickups === 1;
                  if (lastPickup) {
                    setFinishPopup(true);
                  }
                }}
              >
                <FontAwesomeIcon icon={faXmark} size={15} />
              </Pressable>
            </View>
            <Text style={styles.modalText}>
              This pickup has been cancelled successfully.
            </Text>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType='slide'
        transparent={true}
        visible={finishPopup}
        onRequestClose={() => {
          beginNextPickup();
          setFinishPopup(false);
          navigation.navigate('DriverHome');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
            </View>
            <Text style={styles.modalText}>
              You have completed all your pickups for today.{'\n\n'}
              Thank you for making the world a healthier place for us all!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                beginNextPickup();
                setFinishPopup(false);
                navigation.navigate('DriverHome');
              }}
            >
              <Text style={styles.textStyle}>Return Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={{ flex: 1 }}>
        <RMText
          style={{
            justifyContent: 'center',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Pickup Address:</Text> {currentAddress}
        </RMText>
        { currentAddress !== 'No address found' && <RMText style={{ justifyContent: 'center', fontSize: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>Status:</Text> {status}
        </RMText> }
      </View>

      <GooglePlacesAutocomplete
        placeholder='Search for pickup addresses'
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: 'API_KEY',
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

      { currentAddress !== 'No address found'
      && <View
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
              navigation.navigate('DriverHome');
            }}
            width={150}
          />
        )}
      </View> }
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#7DE093',
  },
  buttonClose: {
    backgroundColor: '#7DE093',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
  },
  modalText: {
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

DriverCurrentPickup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverCurrentPickup;
