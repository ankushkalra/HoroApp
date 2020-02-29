import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children, style}) => (
  <View style={[styles.signContainer, style]}>{children}</View>
);

const styles = StyleSheet.create({
  signContainer: {
    elevation: 1.5,
    borderRadius: 2,
    backgroundColor: 'white',
    // borderWidth: 5,
    // borderColor: 'orange',
  },
});

export default Card;
