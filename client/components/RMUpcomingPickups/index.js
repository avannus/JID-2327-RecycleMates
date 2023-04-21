import * as React from 'react';
import { View, StyleSheet, Pressable, Modal } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMPopup from '../../components/RMPopup';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faBan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function RMUpcomingPickups({ visible, onClose, frequency, data, setData }) {
  const [confirmPopup, setConfirmPopupVisible] = React.useState(false);
  const [successPopup, setSuccessPopupVisible] = React.useState(false);
  const [cancelledDate, setCancelledDate] = React.useState('');

  const cancelPickup = (cancelledDate) => {
    const updatedData = { ...data };
    updatedData[frequency].dates = updatedData[frequency].dates.filter(
      (date) => date !== cancelledDate,
    );
    setData(updatedData);
    setConfirmPopupVisible(false);
    setSuccessPopupVisible(true);
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
            visible={confirmPopup}
            onRequestClose={() => {
              setConfirmPopupVisible(false);
            }}
            description='Are you sure you want to cancel this pickup?'
            buttonOneText={'Dismiss'}
            buttonOneFunction={() => {
              setConfirmPopupVisible(false);
            }}
            buttonTwoText={'Confirm'}
            buttonTwoFunction={() => cancelPickup(cancelledDate)}
          />

          <RMPopup
            visible={successPopup}
            onRequestClose={() => {
              setSuccessPopupVisible(false);
            }}
            description='This pickup has been cancelled successfully.'
          />

          <RMText
            style={{
              textDecorationLine: 'underline',
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            {'Upcoming Pickups'}
          </RMText>

          {data[frequency].dates.length > 0 ? (
            data[frequency].dates.map((date, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <RMText>{date}</RMText>
                <Pressable
                  onPress={() => {
                    setConfirmPopupVisible(true);
                    setCancelledDate(date);
                  }}
                >
                  <FontAwesomeIcon icon={faBan} size={15} />
                </Pressable>
              </View>
            ))
          ) : (
            <RMText>No upcoming pickups.</RMText>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
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
  },
});

RMUpcomingPickups.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  frequency: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func,
};

export default RMUpcomingPickups;
