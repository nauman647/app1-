import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Neww from '../screens/Neww';
import Second from '../screens/Second';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='second'>
      <Stack.Screen name="Home" component={Neww} />
      <Stack.Screen name="second" component={Second} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      
    </Stack.Navigator>
  );
}
export default MyStack