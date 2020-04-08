import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

const Asignar = () => {
  return (
    <View>
      <Modal isVisible={false}>
        <View style={{flex: 1}}>
          <Text></Text>
        </View>
      </Modal>
    </View>
  );
};

export default Asignar;
