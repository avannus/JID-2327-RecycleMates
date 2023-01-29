
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

function RMTextInput({ placeholder, secureTextEntry = false, ...props }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={{
        height: 50,
        width: 300,
        borderColor: 'green',
        borderWidth: 1,
        paddingLeft: 40,
        margin: 10,
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
