import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/navigation/MainNav';
import Sec from './src/navigation/Second-nav';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <NavigationContainer >
       <Sec/>
      </NavigationContainer>
      </View>
    );
  }
}
