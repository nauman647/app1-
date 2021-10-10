
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Neww from '../screens/Neww';
import Profile from '../screens/Profile';
import Second from '../screens/Second';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Second" >
      <Tab.Screen name="Home" component={Second} />
      <Tab.Screen name="Login" component={Neww} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default  MyTabs