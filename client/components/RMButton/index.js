import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import RMStyle from '../../RMStyle';

function Button({ label, onPress }) {
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          borderWidth: 2,
          borderColor: RMStyle.colorDark,
          borderRadius: 4,
          alignItems: 'center',
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: RMStyle.colorBackgroundButton,
            borderRadius: 3,
            alignItems: 'center',
          },
        ]}
        onPress={onPress}
      >
        <FontAwesome
          name='user'
          size={18}
          color={RMStyle.colorText}
          style={styles.buttonIcon}
        />
        <Text style={[styles.buttonLabel, { color: RMStyle.colorText }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  // Styles from previous step remain unchanged.
});

export default Button;
