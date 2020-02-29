import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import api from '../services/api';
import Card from '../components/Card';

function RashiTextScreen({route, navigation}) {
  const {rashi} = route.params;

  const [rashiText, setRashiText] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await api.getData(rashi);
      setRashiText(res.data.text);
    }

    fetchData();
  }, [rashi]);

  return (
    <View style={styles.container}>
      <Card style={styles.header}>
        <Text style={styles.headerText}>राशि: {rashi}</Text>
        <Text style={styles.headerText}>
          तिथि: {moment().format('D-M-YYYY')}
        </Text>
      </Card>
      <Card onPress={() => {}} style={styles.rashiTextCardStyle}>
        <Text style={styles.rashiTextStyle}>{rashiText}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    // borderColor: 'red',
    // borderWidth: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
    padding: 20,
    alignSelf: 'stretch',
    // borderWidth: 2,
    // borderColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
  },
  rashiTextCardStyle: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: 'yellow',
    alignItems: 'stretch',
    padding: 20,
  },
  rashiTextStyle: {fontSize: 20},
});

export default RashiTextScreen;
