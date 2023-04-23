import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import RMStyle from '../../RMStyle';
import RMText from '../../components/RMText';
import Button from '../../components/RMButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCircleQuestion,
  faLock,
  faHandshakeAngle,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function Settings({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <View style={{ flex: 1, width: '100%', backgroundColor: '#399431' }}>
        <RMText
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Account Settings
        </RMText>
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ padding: 20 }}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('InProgress');
            }}
          >
            <FontAwesomeIcon icon={faCircleQuestion} size={100} />
            <Text style={[styles.buttonText]}>{'FAQ'}</Text>
          </Pressable>
        </View>
        <View style={{ padding: 20 }}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('InProgress');
            }}
          >
            <FontAwesomeIcon icon={faHandshakeAngle} size={100} />
            <Text style={[styles.buttonText]}>{'Request Help'}</Text>
          </Pressable>
        </View>
        <View style={{ padding: 20 }}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('EditAccount');
            }}
          >
            <FontAwesomeIcon icon={faCircleInfo} size={100} />
            <Text style={[styles.buttonText]}>{'Edit Account Info'}</Text>
          </Pressable>
        </View>
        <View style={{ padding: 20 }}>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push('InProgress');
            }}
          >
            <FontAwesomeIcon icon={faLock} size={100} />
            <Text style={[styles.buttonText]}>{'Change Password'}</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          label='Log out'
          onPress={() => {
            navigation.push('Landing');
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: RMStyle.colors.background,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '80%',
    paddingBottom: 50,
    flex: 6,
  },
  buttonStyle: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  buttonText: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
});

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Settings;
