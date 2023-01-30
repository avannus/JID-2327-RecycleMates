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
          alignItems: 'center',
          padding: 20,
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: RMStyle.colors.primary,
            borderRadius: 20,
            alignItems: 'center',
            width: 150,
            height: 60,
            justifyContent: 'center',
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
        <Text style={[styles.buttonLabel, { color: RMStyle.colorText }]}>
          {label}
        </Text>
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
