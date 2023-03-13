import * as React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function AvailableRoutes() {




  const createTwoButtonAlert = () =>
    Alert.alert('Request Schedule?', 'You will be notified if your schedule change request is approved.', [
      {
        text: 'Cancel',
         
        
        
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Confirm', onPress: () => console.log('Confirm Pressed')},
    ]);


  return (

    
    <View style={styles.container}>
      <RMText style={{ color: '#000000', fontSize: 35}}>
          Available Schedules
    </RMText>
      <Button title={'Schedule Option 1: Mon 12-5pm'} onPress={createTwoButtonAlert} />
      <Button title={'Schedule Option 2: Tue 12-5pm'} onPress={createTwoButtonAlert} />
      <Button title={'Schedule Option 3: Thurs 3-6pm'} onPress={createTwoButtonAlert} />
      <Button title={'Schedule Option 4: Sat 8-11am'} onPress={createTwoButtonAlert} />
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

export default AvailableRoutes;

