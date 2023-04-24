import * as React from 'react';
import { View } from 'react-native';
import RMText from '../../components/RMText';
import RMStyle from '../../RMStyle';
import Button from '../../components/RMButton';
import PropTypes from 'prop-types';

function FAQ() {
  return (
    <View
      style={{
        flex: 0,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: RMStyle.colors.background,
      }}
    >
      <RMText
      style={{
        fontSize: 20,
        padding: 0,
        fontWeight: 'bold',
      }}>Customer FAQ:</RMText>
      <RMText
      style={{
        fontSize: 17,
        padding: 0,
        fontWeight: 'bold',
      }}>Where can I change how often my recycled goods are picked up?</RMText>
      <RMText
      style={{
        fontSize: 15,
        padding: 0,
      }}>On the customer home page, click the "Schedule your pickup frequency" option to set your pickup frequency.</RMText>
      <RMText
       style={{
        fontSize: 17,
        padding: 0,
        fontWeight: 'bold',
      }}>How can I change my pickup address? </RMText>
      <RMText
      style={{
        fontSize: 15,
        padding: 0,
      }}
      >Navigate to the Account tab, where you can find the "edit account info" button. Chnage the fields accordingly.</RMText>

      <RMText
      style={{
        fontSize: 20,
        padding: 0,
        fontWeight: 'bold',
      }}>Driver FAQ: </RMText>

      <RMText
      style={{
      textAlign:'left',
       fontSize: 17,
       padding: 0,
       fontWeight: 'bold',
      }}
      >How can I change my schedule? </RMText>
    <RMText
    style={{
      fontSize: 15,
      padding: 0,
    }}>Visit the driver home page, and click the "request schedule change" buttton. From there, you can click on an available schedule and request for a change.</RMText>
    
    


    </View>
  );
}



FAQ.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FAQ;
