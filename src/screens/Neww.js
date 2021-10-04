import React, {Component} from 'react';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import { Header } from 'react-native-elements';

export default class Neww extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: 'nauman',
      lname: 'sajid',
      email: 'nauman"gmail.com',
      cnic: '611019415652-4',
      address: 'rawat islamabad',
      degree: 'mcs',
      skills: 'react-native',
    };
  }
componentDidMount(){
  const email=this.props.route.params.email
  console.log(email)
  if(email){
    this.setState({email})
  }
}
  render() {
    
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Header backgroundColor={'white'} centerComponent={ <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              color: 'black',
              alignSelf: 'center',
              // marginTop: 10,
            }}>
            Information System
          </Text>} />
        <View>
          {/* <Text
            style={{
              fontSize: 23,
              fontWeight: '800',
              color: 'yellow',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Information System
          </Text> */}
        </View>
        <View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              First name:{this.state.fname}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              Last name:{this.state.lname}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text numberOfLines={1} style={{fontSize: 23, color: 'white'}}>
              Email:{this.state.email}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              CNIC:{this.state.cnic}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              Address:{this.state.address}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              Degree:{this.state.degree}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
              Skills: {this.state.skills}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '5%',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('second')}>
              <Text
                style={{
                  backgroundColor: 'green',
                  borderRadius: 15,
                  fontSize: 25,
                  textAlign: 'center',
                }}>
                {' '}
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
