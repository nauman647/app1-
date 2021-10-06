import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {Header} from 'react-native-elements';

import {siri,s} from '../assets';

export default class flatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'apple',
          price: '5$',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'banana',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'beaf',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'meat',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'corn',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'noodels',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'fish',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'grren leaves',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'beans',
        },
      ],
      modalVisible: false,
    };
  }
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  renderItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.setModalVisible(!this.state.modalVisible)}
        key={index}
        style={{
          flex: 1,
          backgroundColor: 'tomato',
          margin: 10,
          borderRadius: 10,
          height: 70,
        }}>
        <Text
          style={{
            fontSize: 27,
            padding:10,
            color: 'black',
            
          }}>
         
          {item.title} 
          
        </Text>
       
      </TouchableOpacity>
    );
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          backgroundColor={'white'}
          leftComponent={
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'black',
              }}>
              Items
            </Text>
          }
        />
        <FlatList
          contentContainerStyle={{}}
          data={this.state.DATA}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}
          animated={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Price:5$</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 30,
  },
});
