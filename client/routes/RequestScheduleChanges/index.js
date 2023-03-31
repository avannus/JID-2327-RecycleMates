import * as React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import RMText from '../../components/RMText';
import PropTypes from 'prop-types';

function RequestScheduleChanges() {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Request Schedule?',
      'You will be notified if your schedule change request is approved.',
      [
        {
          text: 'Cancel',

          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Confirm', onPress: () => console.log('Confirm Pressed') },
      ],
    );

  return (
    <View style={styles.container}>
      <RMText style={{ color: '#000000', fontSize: 35 }}>
        Available Schedules
      </RMText>
      <Button
        title={'Schedule Option 1: Mon and Tue 12-5pm'}
        onPress={createTwoButtonAlert}
      />
      <Button
        title={'Schedule Option 2: Tue and Sat 12-5pm'}
        onPress={createTwoButtonAlert}
      />
      <Button
        title={'Schedule Option 3: Thurs and Fri 3-6pm'}
        onPress={createTwoButtonAlert}
      />
      <Button
        title={'Schedule Option 4: Sat and Sun 8-11am'}
        onPress={createTwoButtonAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

RequestScheduleChanges.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RequestScheduleChanges;
