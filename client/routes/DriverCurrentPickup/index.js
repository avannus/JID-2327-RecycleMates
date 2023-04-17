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

  const startPickup = () => {
    setStatus('In Progress');
  };

  const markComplete = () => {
    setStatus('Complete');
  };

  const beginNextPickup = () => {
    // TODO: Get next pickup and its status
    setStatus('Not Begun');
  };

  const cancelPickup = () => {
    setConfirmPopupVisible(false);
    setStatus('Cancelled');
    setSuccessPopupVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
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
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  setSuccessPopupVisible(false);
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
            >
              {/* <View style={{ paddingHorizontal: 5 }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    navigation.navigate('DriverHome');
                  }}
                >
                  <Text style={styles.textStyle}>Return home</Text>
                </Pressable>
              </View> */}
            </View>
          </View>
        </View>
      </Modal>
      <RMText
        style={{
          justifyContent: 'center',
          fontSize: 20,
          textAlign: 'center',
        }}
      >
        Current Pickup
      </RMText>
      <RMText style={{ justifyContent: 'center', fontSize: 20 }}>
        Status: {status}
      </RMText>

      <GooglePlacesAutocomplete
        placeholder='Search for pickup location'
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
          types: 'establishment',
          radius: 1000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 1,
            width: '100%',
            zIndex: 1000,
          },
          listView: { backgroundColor: 'white' },
        }}
      />
      <MapView
        style={{ width: '100%', height: '50%' }}
        provider={PROVIDER_GOOGLE}
        region={region}
      >
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

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {status === 'Not Begun' && (
          <Button label='Start Pickup' onPress={startPickup} />
        )}

        {status === 'In Progress' && (
          <Button label='Mark Complete' onPress={markComplete} />
        )}

        {(status === 'Not Begun' || status === 'In Progress') && (
          <Button
            label='Cancel Pickup'
            onPress={() => {
              setConfirmPopupVisible(true);
            }}
          />
        )}

        {(status === 'Complete' || status === 'Cancelled') && (
          <Button label='Begin Next Pickup' onPress={beginNextPickup} />
        )}

        {(status === 'Complete' || status === 'Cancelled') && (
          <Button
            label='Return Home'
            onPress={() => {
              navigation.navigate('DriverHome');
            }}
          />
        )}
      </View>
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
    width: 300,
    height: 300,
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

