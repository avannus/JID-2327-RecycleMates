
import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import RMStyle from '../../RMStyle';

const colors = RMStyle.colors.textInput;

function RMTextInput({ placeholder, secureTextEntry = false, ...props }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      secureTextEntry={secureTextEntry}
      style={{
        height: 50,
        width: 300,
        borderColor: colors.border,
        borderWidth: 1,
        paddingLeft: 40,
        margin: 10,
        borderRadius: 3,
        backgroundColor: colors.background,
        shadowColor: colors.shadow,
        shadowOffset: { width: 2, height: 4 },
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
