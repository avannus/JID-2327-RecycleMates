import * as React from 'react';
import { View, StyleSheet, Modal, Pressable } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMText from '../../components/RMText';
import Button from '../../components/RMButton';
import RMPopup from '../../components/RMPopup';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import customerData from '../exampleCustomerData';

function RMBoxRequest({ visible, onClose }) {
  // const { frequency } = route.params;
  // const day = customerData[frequency].dayOfTheWeek;
  // const time = customerData[frequency].timePeriod;
  // const nextPickup = customerData[frequency].dates[0];
  const [popupVisible, setPopupVisible] = React.useState(false);

  const confirm = () => {
    setPopupVisible(true);
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
          <View style={styles.modalHeader}>
            <Pressable onPress={onClose}>
              <FontAwesomeIcon icon={faTimes} size={20} />
            </Pressable>
          </View>
          <RMPopup
            visible={popupVisible}
            onRequestClose={() => {
              onClose();
              setPopupVisible(false);
            }}
            description={'Changes saved!'}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '95%',
            }}
          >
            <RMText style={{ fontSize: 20 }}>
              Boxes will be dropped off at your next scheduled pickup.
            </RMText>
            {/* <RMText style={{ fontSize: 20 }}>
          Your next scheduled pickup is: {'\n'} {day}, {nextPickup}, {time}.
        </RMText> */}
            <RMText style={{ fontSize: 20 }}>
              Please describe the number of boxes you wish to request and any
              additional notes.
            </RMText>
          </View>
          <RMTextInput
            label='Number of Boxes'
            placeholder='Number of Boxes'
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCompleteType='none'
            textContentType='none'
          />
          <RMTextInput
            label='Additional Notes'
            placeholder='Additional Notes'
            keyboardType='default'
            autoCapitalize='none'
            autoCompleteType='none'
            textContentType='none'
          />
          <Button theme='primary' label='Confirm' onPress={confirm} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#7DE093',
  },
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
    width: '90%',
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

RMBoxRequest.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RMBoxRequest;
