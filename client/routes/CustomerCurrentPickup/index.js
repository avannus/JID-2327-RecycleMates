import * as React from 'react';
import { View, Modal, StyleSheet, Pressable, Text, Alert } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function CustomerCurrentPickup({ navigation }) {
  const [popupVisible, setPopupVisible] = React.useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const cancelPickup = () => {
    togglePopup();
    cancellationAlert();
  };

  const cancellationAlert = () => {
    Alert.alert('Cancellation Successful', 'This pickup has been cancelled.', [
      {
        text: 'Return Home',
        onPress: returnHome,
        style: 'default',
      },
    ]);
  };

  const returnHome = () => {
    navigation.navigate('CustomerHome');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={popupVisible}
        onRequestClose={() => {
          setPopupVisible(!popupVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable onPress={togglePopup}>
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
                  onPress={togglePopup}
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
      <RMText>Your pickups are currently scheduled to occur (frequency)</RMText>
      <RMText>Your next pickup is scheduled for (date)</RMText>
      <Button
        label='Cancel Pickup'
        onPress={togglePopup}
      ></Button>
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

CustomerCurrentPickup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CustomerCurrentPickup;
