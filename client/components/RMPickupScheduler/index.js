import * as React from 'react';
import { View, Alert, Modal, StyleSheet } from 'react-native';
import RMText from '../../components/RMText';
import RMButton from '../../components/RMButton';
import RMPopup from '../../components/RMPopup';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';

function RMPickupScheduler({ visible, onClose, setFrequency }) {
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

    setFrequency(value);
    setPopupVisible(true);
    console.log(value);
  };

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <RMPopup
            visible={popupVisible}
            onRequestClose={() => {
              setPopupVisible(false);
              onClose();
            }}
            description='Your pickup frequency has been scheduled!'
          />
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
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '80%',
    height: 275,
  },
});

RMPickupScheduler.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setFrequency: PropTypes.func,
};

export default RMPickupScheduler;
