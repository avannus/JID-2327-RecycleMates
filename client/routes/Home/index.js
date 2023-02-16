import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';

function Entry({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}>
        <Button
        label='Edit Account Info'
        onPress={() => {
          navigation.navigate('Edit');
        }}
        />
        
      <RMText>Home Screen</RMText>
    </View>
  );

}

export default Entry;