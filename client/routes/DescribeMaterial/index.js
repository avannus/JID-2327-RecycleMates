import * as React from 'react';
import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function DescribeMaterial({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const confirmPickup = () => {
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const returnHome = () => {
    navigation.goBack();
  };

  return (
    <View
      style={styles.container}
    >
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
              </Pressable>
            </View>
            <Text style={styles.modalText}>Your pickup has been confirmed!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={returnHome}
            >
              <Text style={styles.textStyle}>Return home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <RMText>Describe Materials:</RMText>
      <RMTextInput
        label='Type pickup material description'
        placeholder='Type pickup material description'
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMTextInput
        label='Number of boxes requested (optional)'
        placeholder='Number of boxes requested (optional)'
        secureTextEntry={true}
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMButton
        theme='primary'
        label='Confirm Pickup'
        onPress={confirmPickup}
      />
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

DescribeMaterial.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DescribeMaterial;
