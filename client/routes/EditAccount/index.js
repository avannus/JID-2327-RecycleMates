import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMPopup from '../../components/RMPopup';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function EditAccount() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const saveChanges = () => {
    // TODO: Save information to the server
    setModalVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMPopup
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        description='Changes saved!'
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: RMStyle.colors.background,
        }}
      >
        <RMText>Edit Account Info</RMText>
        <RMTextInput
          label='Name'
          placeholder='Name'
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='name'
          textContentType='name'
        />
        <RMTextInput
          label='Password1'
          placeholder='Password'
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='new-password'
          textContentType='password'
        />
        <RMTextInput
          label='Password2'
          placeholder='Confirm Password'
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='password'
          textContentType='password'
        />
        <RMTextInput
          label='Address'
          placeholder='Pickup Address'
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='address'
          textContentType='address'
        />
        <RMTextInput
          label='City'
          placeholder='Pickup City'
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='city'
          textContentType='city'
        />
        <RMTextInput
          label='Zip Code'
          placeholder='Pickup Zip Code'
          secureTextEntry={true}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='zipcode'
          textContentType='zipcode'
        />
        <RMButton theme='primary' label='Save changes' onPress={saveChanges} />
      </View>
    </View>
  );
}

EditAccount.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default EditAccount;
