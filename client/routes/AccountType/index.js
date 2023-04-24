import * as React from 'react';
import { View } from 'react-native';
import Button from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function AccountType({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText
        style={{
          justifyContent: 'center',
          fontSize: 36,
          marginBottom: 100,
          textAlign: 'center',

        }}
      >
        Choose Account Type
      </RMText>

      <Button
        label='I am a Customer'
        onPress={() => {
          navigation.push('Register', { accountType: 'customer' });
        }}
      />
      <Button
        label='I am a Driver'
        onPress={() => {
          navigation.push('Register', { accountType: 'driver' });
        }}
      />
    </View>
  );
}

AccountType.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default AccountType;
