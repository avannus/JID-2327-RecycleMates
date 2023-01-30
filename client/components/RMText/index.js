import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import RMStyle from '../../RMStyle';

function RMTextInput({ text, secureTextEntry = false, ...props }) {
  return (
    <View
      style={{
        // height: 50,
        // width: 300,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        // backgroundColor: RMStyle.colors.dark,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        text
        secureTextEntry={secureTextEntry}
        alignItems='center'
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
