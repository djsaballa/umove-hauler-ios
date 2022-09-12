import 'react-native-gesture-handler';
import React, { Component }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './pages/Start';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default class App extends Component{
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={Start}/>
          <Stack.Screen name="Login" component={Login} options={{ cardStyleInterpolator: forFade }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{gestureEnabled: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

