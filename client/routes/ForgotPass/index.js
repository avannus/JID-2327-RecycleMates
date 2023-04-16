import * as React from 'react';
import { View, StyleSheet, Modal, Pressable, Text } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function ForgotPass({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);

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
          navigation.navigate('Login');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <FontAwesomeIcon icon={faXmark} size={15} />
              </Pressable>
            </View>
            <Text style={styles.modalText}>
              {'A link to reset your password has been sent to your email.'}
            </Text>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RMText>
          If you have forgotten your password, enter your email below, and
          we&apos;ll send you a link to reset your password.
        </RMText>
        <RMTextInput
          label='Email'
          placeholder='Email address'
          secureTextEntry={false}
          keyboardType='default'
          autoCapitalize='none'
          autoCompleteType='email'
        ></RMTextInput>
        <Button
          label='Reset Password'
          onPress={() => {
            setModalVisible(true);
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

ForgotPass.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ForgotPass;
