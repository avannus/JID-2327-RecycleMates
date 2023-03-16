import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import RMButton from '../../components/RMButton';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import { SERVER } from 'RMenv';
import { currentLogin } from '../../currentLogin';

function SchedulePickups({ navigation }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: 'Weekly', value: 1 },
    { label: 'Biweekly', value: 2 },
    { label: 'Monthly', value: 4 },
    { label: 'Bimonthly', value: 8 },
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
            const freqRequest = {
              username: currentLogin.username,
              password: currentLogin.password,
              freqReq: value,
            };
            fetch(`${SERVER}customer/freqRequest`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify(freqRequest),
            })
              .then((response) => response.json())
              .then((body) => {
                console.log('body: ', body);
                navigation.navigate('CustomerHome');
              })
              .catch((error) => {
                // TODO handle failure
                console.log('Error Sending Frequency Update Request: ');
                console.log(error);
              });
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
