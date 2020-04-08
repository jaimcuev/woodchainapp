import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style && props.style]} 
      onPress={props.onPress && props.onPress}>
      <Text 
        style={styles.labelButton}>{props.name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#339989',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 2
  },
  labelButton:{
    color: '#FFF',
  }
});

export default MyButton;
