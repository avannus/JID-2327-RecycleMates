import * as React from 'react';
import { View, Alert } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
import RMPopup from '../../components/RMPopup';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';

function SchedulePickups({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Weekly', value: 'weekly' },
    { label: 'Biweekly', value: 'biweekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Bimonthly', value: 'bimonthly' },
  ]);
  const [buttonVisible, setButtonVisible] = React.useState(true);
  const [popupVisible, setPopupVisible] = React.useState(false);

  const confirmPickup = () => {
    if (!value) {
      Alert.alert('Please select a pickup frequency.');
      return;
    }

    setPopupVisible(true);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMPopup
        visible={popupVisible}
        onRequestClose={() => {
          setPopupVisible(false);
          navigation.push('CustomerHome');
        }}
        description='Your pickup frequency has been scheduled!'
      />
      <RMText>Request Pickup Frequency</RMText>
      <RMText>How often would you like to have pickups?</RMText>

      <View style={{ width: '80%', paddingBottom: 10 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onOpen={() => {
            setButtonVisible(false);
          }}
          onClose={() => {
            setButtonVisible(true);
          }}
        />
      </View>

      {buttonVisible && (
        <RMButton theme='primary' label='Confirm' onPress={confirmPickup} />
      )}
    </View>
  );
}

SchedulePickups.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SchedulePickups;
