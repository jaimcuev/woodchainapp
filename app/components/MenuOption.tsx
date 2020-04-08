import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MenuOption = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress && props.onPress}
      style={styles.optionButton}>
      <FeatherIcon name={props.icon} size={20} color="#999999" />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center"
  },
  text: {
    marginLeft: 15,
    fontWeight: "bold",
    color: "#333333"
  }
});

export default MenuOption;
