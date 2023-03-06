import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';

function AvailableRoutes() {
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
          justifyContent: 'center',
          fontSize: 36,
          marginBottom: 100,
          textAlign: 'center',

        }}
      >
        Available Routes
      </RMText>

      <RMText>(We will display available routes the driver can choose from here)</RMText>

    </View>
  );
}

export default AvailableRoutes;

