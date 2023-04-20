import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMPopup from '../../components/RMPopup';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function CustomerCurrentPickup({ navigation }) {
  const [confirmPopup, setConfirmPopupVisible] = React.useState(false);
  const [successPopup, setSuccessPopupVisible] = React.useState(false);

  const cancelPickup = () => {
    setConfirmPopupVisible(false);
    setSuccessPopupVisible(true);
  };

  return (
    <View style={styles.container}>
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
        buttonTwoFunction={cancelPickup}
      />

      <RMPopup
        visible={successPopup}
        onRequestClose={() => {
          setSuccessPopupVisible(false);
        }}
        description='This pickup has been cancelled successfully.'
        buttonOneText={'Return Home'}
        buttonOneFunction={() => {
          navigation.navigate('CustomerHome');
        }}
      />

      <View style={styles.container}>
        <RMText>Your pickups are currently scheduled to occur weekly.</RMText>
        <RMText>Your next pickup is scheduled for April 24th, 2023</RMText>
        <Button
          label='Cancel Pickup'
          onPress={() => {
            setConfirmPopupVisible(true);
          }}
        />
      </View>
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
});

CustomerCurrentPickup.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default CustomerCurrentPickup;
