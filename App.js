import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RashiTextScreen from './src/screens/RashiTextScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'अपनी राशि चुने'}}
        />
        <Stack.Screen
          name="RashiText"
          component={RashiTextScreen}
          options={{title: 'राशिफल'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
