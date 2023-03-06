/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function DescribeMaterial({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Describe Material</RMText>
      <RMText>Your current scheduled pickup: (date + time)</RMText>
      <RMTextInput
        label='Type pickup material description'
        placeholder='Type pickup material description'
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMTextInput
        label='Number of boxes requested (optional)'
        placeholder='Number of boxes requested (optional)'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMButton
        theme='primary'
        label='Confirm Pickup'
        onPress={() => {
          navigation.navigate('CustomerHome');
        }}
      />
    </View>
  );
}

export default DescribeMaterial;
