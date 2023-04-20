import * as React from 'react';
import { View, Modal, StyleSheet, Pressable, Text } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function CustomerCurrentPickup({ navigation }) {
  const [confirmPopup, setConfirmPopupVisible] = React.useState(false);
  const [successPopup, setSuccessPopupVisible] = React.useState(false);

  const cancelPickup = () => {
    setConfirmPopupVisible(false);
    setSuccessPopupVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={confirmPopup}
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
        visible={successPopup}
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
              <View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    navigation.navigate('CustomerHome');
                  }}
                >
                  <Text style={styles.textStyle}>Return home</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <RMText>Your pickups are currently scheduled to occur weekly.</RMText>
        <RMText>Your next pickup is scheduled for April 24th, 2023</RMText>
      </View>
      <Button
        label='Cancel Pickup'
        onPress={() => {
          setConfirmPopupVisible(true);
        }}
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
