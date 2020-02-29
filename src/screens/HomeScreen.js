import React from 'react';
import {View, StyleSheet} from 'react-native';
import {signs} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';
import chunk from 'lodash/chunk';
import SignCard from '../components/SignCard';

function HomeScreen(props) {
  const pairs = chunk(signs, 2);

  const _onPressButton = text => {
    props.navigation.navigate('RashiText', {rashi: text});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.signScrollView}
        contentContainerStyle={styles.signContentContainerStyle}>
        {pairs.map(pair => (
          <View style={styles.pairContainer} key={pair[0] + pair[1]}>
            <SignCard onPress={_onPressButton} text={pair[0]} key={pair[0]} />
            <SignCard onPress={_onPressButton} text={pair[1]} key={pair[1]} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  signScrollView: {
    flex: 1,
  },
  signContentContainerStyle: {paddingTop: 10, paddingHorizontal: 10},
  pairContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default HomeScreen;
