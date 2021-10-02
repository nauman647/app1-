import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Neww from '../screens/Neww';
import Second from '../screens/Second';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Neww} />
      <Stack.Screen name="second" component={Second} />
    </Stack.Navigator>
  );
}
export default MyStack