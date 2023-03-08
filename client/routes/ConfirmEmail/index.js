import * as React from 'react';
import { View } from 'react-native';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
import RMText from '../../components/RMText';
import PropTypes from 'prop-types';

function Landing({ route, navigation }) {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      navigation.navigate('Landing');
    }
  }, [timer]);

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
          fontSize: 36,
          padding: 0,
          textAlign: 'center',
        }}
      >
        Welcome to RecycleMates, {route.params.firstName}!{'\n'}
        Please Verify Your Email through a link sent to:
        {'\n'}
        {'\n'}
        {route.params.email}
        {'\n'}
        {'\n'}
        Redirecting to to Landing Page in {timer} seconds...
      </RMText>
      <RMButton
        label='Continue'
        onPress={() => {
          navigation.navigate('Landing');
        }}
      />
    </View>
  );
}

Landing.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default Landing;
