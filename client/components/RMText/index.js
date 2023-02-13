import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import RMStyle from '../../RMStyle';

function RMTextInput({ text, ...props }) {
  return (
    <View
      style={{
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Text
        text
        alignItems='center'
        justifyContent='center'
        style={{
          color: RMStyle.colors.text,
          fontSize: 20,
        }}
        {...props}
      />
    </View>
  );
}

RMTextInput.propTypes = {
  text: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default RMTextInput;
