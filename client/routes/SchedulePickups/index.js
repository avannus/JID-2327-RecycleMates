import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
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
  const [visible, setVisible] = React.useState(true);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText>Request Pickup Frequency Change</RMText>
      <RMText>
        How often would you like to have pickups?
      </RMText>

      <View style={{ width: '80%', paddingBottom: 10 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onOpen={() => {
            setVisible(false);
          }}
          onClose={() => {
            setVisible(true);
          }}
        />
      </View>

      {visible && (
        <RMButton
          theme='primary'
          label='Confirm'
          onPress={() => {
            navigation.navigate('CustomerHome');
          }}
        />
      )}
    </View>
  );
}

SchedulePickups.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SchedulePickups;
