
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import RMStyle from '../../RMStyle';

function RMTextInput({ placeholder, secureTextEntry = false, ...props }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={{
        height: 50,
        width: 300,
        borderColor: RMStyle.colors.dark,
        borderWidth: 1,
        paddingLeft: 40,
        margin: 10,
        borderRadius: 20,
        backgroundColor: RMStyle.colors.light,
      }}
      {...props}
    />
  );
}

RMTextInput.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default RMTextInput;
