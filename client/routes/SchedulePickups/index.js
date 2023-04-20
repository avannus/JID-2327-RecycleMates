import * as React from 'react';
import { View, StyleSheet, Pressable, Modal, Text, Alert } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SchedulePickups({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Weekly', value: 'weekly' },
    { label: 'Biweekly', value: 'biweekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Bimonthly', value: 'bimonthly' },
  ]);
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const [popupVisible, setPopupVisible] = React.useState(false);
  const confirmPickup = () => {
    if (!value) {
      Alert.alert('Please select a pickup frequency.');
      return;
    }

    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (value) {
      navigation.navigate('CustomerCurrentPickup', { pickupFrequency: value });
    }
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
              <Pressable onPress={closePopup}>
                <FontAwesomeIcon icon={faXmark} size={15} />
              </Pressable>
            </View>
            <Text style={styles.modalText}>
              Your pickup frequency has been scheduled!
            </Text>
          </View>
        </View>
      </Modal>
      <RMText>Request Pickup Frequency</RMText>
      <RMText>How often would you like to have pickups?</RMText>

      <View style={{ width: '80%', paddingBottom: 10 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onOpen={() => {
            setButtonVisible(false);
          }}
          onClose={() => {
            setButtonVisible(true);
          }}
        />
      </View>

      {buttonVisible && (
        <RMButton theme='primary' label='Confirm' onPress={confirmPickup} />
      )}
    </View>
  );
}

SchedulePickups.propTypes = {
  navigation: PropTypes.object.isRequired,
};

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

export default SchedulePickups;
