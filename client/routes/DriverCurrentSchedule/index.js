import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import PropTypes from 'prop-types';
import exampleSchedule from '../exampleScheduleData';

function DriverCurrentSchedule() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      {exampleSchedule.map((week) => (
        <View key={week.weekOf}>
          <RMText
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 10,
            }}
          >
            Week of {week.weekOf}
          </RMText>
          {week.days.map((day) => (
            <RMText key={day.dayOfWeek}>
              {day.dayOfWeek}, {day.timePeriod} : {day.numOfPickups > 0 ? day.numOfPickups + ' pickups' : 'Complete'}
            </RMText>
          ))}
        </View>
      ))}
    </View>
  );
}

DriverCurrentSchedule.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DriverCurrentSchedule;
