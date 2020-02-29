import React from 'react';
import Card from './Card';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const SignCard = ({text, onPress}) => (
  <TouchableOpacity style={styles.touchableStyle} onPress={() => onPress(text)}>
    <Card style={styles.signContainer}>
      <Text style={styles.signText}>{text}</Text>
    </Card>
  </TouchableOpacity>
);

export default SignCard;

const styles = StyleSheet.create({
  touchableStyle: {flex: 1},
  signContainer: {
    margin: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signImage: {
    height: 100,
    width: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signTextBox: {},
  signText: {
    fontSize: 22,
    margin: 10,
    textAlign: 'center',
  },
});
