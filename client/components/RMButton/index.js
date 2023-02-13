import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Pressable, Text } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import RMStyle from '../../RMStyle';

const colors = RMStyle.colors.button;

function Button({ label, onPress }) {
  return (
    <View
      style={[
        styles.buttonContainer,
        {
          alignItems: 'center',
          padding: 10,
        },
      ]}
    >
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: colors.background,
            borderRadius: 100,
            alignItems: 'center',
            width: 200,
            height: 60,
            justifyContent: 'center',
            shadowColor: colors.shadow,
            shadowOffset: { width: 1, height: 5 },
          },
        ]}
        onPress={onPress}
      >
        {/* <FontAwesome
          name='user'
          size={18}
          color={colors.icon}
          style={styles.buttonIcon}
        /> */}
        <Text style={[styles.buttonLabel, { color: colors.text }]}>
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
