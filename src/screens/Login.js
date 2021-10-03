import React, {Component} from 'react';
import {View, Text, Image,TextInput, TouchableOpacity} from 'react-native';


import {siri, img} from '../assets';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#239b56'}}>
        <View>
          <Text
            style={{
              fontSize: 26,
              color: '#ecf0f1',
              fontWeight: '600',
              textAlign: 'center',
              margin: '7%',
            }}>
            Enter Username & Password
          </Text>
        </View>
        <View style={{alignSelf: 'center',}}>
        <View>
            <TextInput
              style={{
               
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="email"></TextInput>
          </View>
          <View>
          <View>
            <TextInput
              style={{
               
                borderWidth: 1,
                fontSize: 14,
                height: 40,
                width: 200,
                margin: 10,
                color:'white',borderColor:'white'
              }}
              placeholder="password"></TextInput>
          </View>
          </View>
        </View>

        <View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={{
              fontSize: 27,
              borderRadius:10,
              alignSelf:'center',
              width:'35%',
              textAlign:'center',
              fontWeight: '400',
              backgroundColor:'white',
              marginTop:'5%'
             
            }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
