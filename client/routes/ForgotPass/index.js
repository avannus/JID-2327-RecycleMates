import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import RMTextInput from '../../components/RMTextInput';
import PropTypes from 'prop-types';

function ForgotPass({ navigation }) {
  const [visible, setVisible] = React.useState(true);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      {visible && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <RMText>
            If you have forgotten your password, enter your email below
            and we&apos;ll send you a link to reset your password.
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
              setVisible(false);
            }}
          ></Button>
        </View>
      )}
      {!visible && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <RMText>
            A link to reset your password has been sent to your email.
          </RMText>
          <Button
            label='Back to login'
            onPress={() => {
              navigation.navigate('Login');
            }}
          ></Button>
        </View>
      )}
    </View>
  );
}

ForgotPass.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ForgotPass;
