import * as React from 'react';
import { StyleSheet, Modal, View, Text, Pressable } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';

function Edit({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const saveChanges = () => {
    // TODO save information to the server
    setModalVisible(true);
  };

  const returnHome = () => {
    setModalVisible(!modalVisible);
    navigation.goBack();
  };

  return (
    <View style={styles.centeredView}>
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View styles={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Changes saved!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={returnHome}
            >
              <Text style={styles.textStyle}>Return home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
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
        <RMButton theme='primary' label='Save' onPress={saveChanges} />
      </View>
    </View>
  );
}

Edit.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RMStyle.colors.background,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Edit;
