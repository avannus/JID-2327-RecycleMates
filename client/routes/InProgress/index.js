import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function InProgress({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Page in progress</RMText>
      <Button label='Go back' onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

InProgress.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default InProgress;
