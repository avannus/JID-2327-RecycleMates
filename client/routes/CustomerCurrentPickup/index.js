import * as React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMPopup from '../../components/RMPopup';
// import Button from '../../components/RMButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import customerData from '../exampleCustomerData';

function CustomerCurrentPickup({ navigation, route }) {
  const { frequency } = route.params;
  const day = customerData[frequency].dayOfTheWeek;
  const time = customerData[frequency].timePeriod;
  const nextPickup = customerData[frequency].dates[0];
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
        <RMText style={{ textAlign: 'center', fontSize: 20 }}>
          Your pickups are currently scheduled to occur{' '}
          <Text style={{ fontWeight: 'bold' }}>{frequency}</Text> on {day}{' '}
          during {time}.
        </RMText>
        <RMText style={{ textAlign: 'center', fontSize: 20 }}>
          Your next pickup is scheduled for{' '}
          <Text style={{ fontWeight: 'bold' }}>{nextPickup}</Text>.
        </RMText>

        {/* <Button
          label='Cancel Pickup'
          onPress={() => {
            setConfirmPopupVisible(true);
          }}
        /> */}

        <RMText
          style={{
            textDecorationLine: 'underline',
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          {'Upcoming Pickups'}
        </RMText>

        {customerData[frequency].dates.map((date, index) => (
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
              }}
            >
              <FontAwesomeIcon icon={faTimes} size={15} />
            </Pressable>
          </View>
        ))}
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
  frequency: PropTypes.string,
};

export default CustomerCurrentPickup;
