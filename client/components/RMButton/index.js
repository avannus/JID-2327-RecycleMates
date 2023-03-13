import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Pressable, Text } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import RMStyle from '../../RMStyle';

const colors = RMStyle.colors.button;

function Button({ label, onPress, width, height }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: colors.background,
            borderRadius: 100,
            alignItems: 'center',
            width,
            height,
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
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

Button.defaultProps = {
  width: 200,
  height: 60,
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  buttonLabel: {
    color: colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  // Styles from previous step remain unchanged.
});

export default Button;
