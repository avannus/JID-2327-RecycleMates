import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function RequestAssignmentChanges({ navigation }) {
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

RequestAssignmentChanges.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RequestAssignmentChanges;
