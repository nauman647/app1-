import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header, Avatar} from 'react-native-elements';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      names:' nauman',
      phone: 'nauman"gmail.com',
      pin: '611019415652-4',
      class: 'rawat islamabad',
      
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor={'white'}
          leftComponent={
            <Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}>
                <MaterialIcons name='arrow-back-ios' size={30} color="black" />
              </TouchableOpacity>
            </Text>
          }
          centerComponent={
            <Text
              style={{
                fontSize: 23,
                fontWeight: '800',
                color: 'black',
              }}>
             Profile
            </Text>
          }
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginLeft:13,

            width: '90%',
          }}>
          <View
            style={{
              padding: '10%',
            }}>
            <Avatar
              size="xlarge"
              rounded
              rounded

              source={{
                uri: 'data:image/jpeg;base64,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',
                size: '30%',
              }}
            />
          </View>
          <View>
            
          </View>
          
        </View>
      </View>
    );
  }
}
