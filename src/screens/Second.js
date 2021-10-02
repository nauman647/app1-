import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {siri,img} from '../assets';
export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,}}>
       <Image source={siri} resizeMode='cover' style={{height:'40%',width:'100%'}}/>
      </View>
    );
  }
}
