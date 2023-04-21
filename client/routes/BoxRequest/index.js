import * as React from 'react';
import { View } from 'react-native';
import RMTextInput from '../../components/RMTextInput';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import RMPopup from '../../components/RMPopup';
import PropTypes from 'prop-types';
// import customerData from '../exampleCustomerData';

function BoxRequest({ navigation }) {
  // const { frequency } = route.params;
  // const day = customerData[frequency].dayOfTheWeek;
  // const time = customerData[frequency].timePeriod;
  // const nextPickup = customerData[frequency].dates[0];
  const [popupVisible, setPopupVisible] = React.useState(false);

  const confirm = () => {
    setPopupVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMPopup
        visible={popupVisible}
        onRequestClose={() => {
          setPopupVisible(false);
          navigation.navigate('CustomerHome');
        }}
        description={'Changes saved!'}
      />
      <View
        style={{ alignItems: 'center', justifyContent: 'center', width: '95%' }}
      >
        <RMText style={{ fontSize: 20 }}>
          Boxes will be dropped off at your next scheduled pickup.
        </RMText>
        {/* <RMText style={{ fontSize: 20 }}>
          Your next scheduled pickup is: {'\n'} {day}, {nextPickup}, {time}.
        </RMText> */}
        <RMText style={{ fontSize: 20 }}>
          Please describe the number of boxes you wish to request and any
          additional notes.
        </RMText>
      </View>
      <RMTextInput
        label='Number of Boxes'
        placeholder='Number of Boxes'
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <RMTextInput
        label='Additional Notes'
        placeholder='Additional Notes'
        keyboardType='default'
        autoCapitalize='none'
        autoCompleteType='none'
        textContentType='none'
      />
      <Button theme='primary' label='Confirm' onPress={confirm} />
    </View>
  );
}

BoxRequest.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default BoxRequest;
