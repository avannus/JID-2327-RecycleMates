import * as React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

function Edit() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const saveChanges = () => {
    // TODO: Save information to the server
    setModalVisible(true);
  };

  // const returnHome = () => {
  //   navigation.goBack();
  // };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable onPress={toggleModal}>
                <FontAwesomeIcon icon={faXmark} size={15} />
                {/* <AntDesign name='close' size={15} color='black' /> */}
              </Pressable>
            </View>
            <Text style={styles.modalText}>Changes saved!</Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={returnHome}
            >
              <Text style={styles.textStyle}>Return home</Text>
            </Pressable> */}
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
        <RMButton theme='primary' label='Save changes' onPress={saveChanges} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#7DE093',
  },
  buttonClose: {
    backgroundColor: '#7DE093',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RMStyle.colors.background,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 5,
  },
  modalText: {
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

Edit.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Edit;
