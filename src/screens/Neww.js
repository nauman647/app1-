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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Neww extends Component {
  constructor(props) {
    super(props);
    this.state = {
     names:' nauman',
      email: 'nauman"gmail.com',
      cnic: '611019415652-4',
      address: 'rawat islamabad',
      degree: 'mcs',
      skills: 'react-native',
      DATA : [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ] 
    };
  }
componentDidMount(){
  
  const email=this.props.route.params.email
  const skills=this.props.route.params.skilss
  const cnic=this.props.route.params.cnic
  const address=this.props.route.params.address
  const names=this.props.route.params.name
  console.log('\n',email,skills,cnic,address)
    this.setState({email,skills,cnic,address,names})
 
}
renderItem=({index,item})=>{
  <TouchableOpacity key={index} style={{ flex:1,backgroundColor:'tomato',}}>
<Text> {item.name} </Text>
  </TouchableOpacity>
}
  render() {
    
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Header backgroundColor={'white'} 
            rightComponent={<Text>
              <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}>    
            <MaterialIcons name='person' size={30} color='black'/>
            </TouchableOpacity>
          </Text>}
         centerComponent={
         
      
         <Text
          style={{
            fontSize: 23,
            fontWeight: '800',
            color: 'black',
        
          }}>
            Info system
        </Text>
    
      }
        
          />
         
          
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
              padding: '7%',
            }}>
            <Text style={{fontSize: 23, color: 'white'}}>
             name:{this.state.names}
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'orange',
              width: '90%',
              padding: '7%',
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
              padding: '7%',
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
              padding: '7%',
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
              padding: '7%',
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
              onPress={() => this.props.navigation.navigate('flatScreen')}>
              <Text
                style={{
                  backgroundColor: 'green',
                  borderRadius: 15,
                  fontSize: 25,
                  textAlign: 'center',
                }}>
               
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
