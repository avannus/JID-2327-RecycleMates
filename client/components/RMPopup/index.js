import React from 'react';
import { Modal, Text, Pressable, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const RMPopup = ({
  onRequestClose,
  visible,
  xVisibility = true,
  description,
  buttonOneText,
  buttonOneFunction,
  buttonTwoText,
  buttonTwoFunction,
}) => {
  const numberOfButtons = buttonOneText ? (buttonTwoText ? 2 : 1) : 0;

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {xVisibility && (
            <View style={styles.modalHeader}>
              <Pressable onPress={onRequestClose}>
                <FontAwesomeIcon icon={faTimes} size={15} />
              </Pressable>
            </View>
          )}
          <Text style={styles.modalText}>{description}</Text>
          {numberOfButtons > 0 && (
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {numberOfButtons === 1 && (
                <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                  <Pressable
                    style={{
                      backgroundColor: '#7DE093',
                      borderRadius: 20,
                      padding: 10,
                      elevation: 2,
                    }}
                    onPress={buttonOneFunction}
                  >
                    <Text style={styles.textStyle}>{buttonOneText}</Text>
                  </Pressable>
                </View>
              )}
              {numberOfButtons === 2 && (
                <>
                  <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                    <Pressable
                      style={{
                        backgroundColor: '#D3D3D3',
                        borderRadius: 20,
                        padding: 10,
                        elevation: 2,
                      }}
                      onPress={buttonOneFunction}
                    >
                      <Text style={{ color: 'black' }}>{buttonOneText}</Text>
                    </Pressable>
                  </View>
                  <View style={{ paddingHorizontal: 5, paddingVertical: 5 }}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={buttonTwoFunction}
                    >
                      <Text style={styles.textStyle}>{buttonTwoText}</Text>
                    </Pressable>
                  </View>
                </>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#7DE093',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '50%',
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

RMPopup.propTypes = {
  description: PropTypes.string.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  xVisibility: PropTypes.bool,
  buttonOneText: PropTypes.string,
  buttonOneFunction: PropTypes.func,
  buttonTwoText: PropTypes.string,
  buttonTwoFunction: PropTypes.func,
};

export default RMPopup;
