/* eslint-disable react/prop-types */
import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function BoxRequest({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Box Request:</RMText>
      <RMText>Boxes will be dropped off at your next scheduled pickup.</RMText>
      <RMText>Your next scheduled pickup is: (date + time).</RMText>
      <RMText>Your next pickup is requesting (number of boxes) boxes.</RMText>
      <RMTextInput
        label='Number of Boxes'
        placeholder='Number of Boxes'
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMTextInput
        label='Additional Notes'
        placeholder='Additional Notes'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
    </View>
  );
}

export default BoxRequest;