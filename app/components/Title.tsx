import React from 'react'
import { Text, StyleSheet } from 'react-native';

const Title = (props: any) => {
  return (
    <Text style={styles.optionTitleText}>{props.title}</Text>
  );
};

const styles = StyleSheet.create({
  optionTitleText: {
    fontWeight: "bold",
    fontSize: 18,
    backgroundColor: "#F7F8FA",
    borderTopColor: "#ededed",
    borderBottomColor: "#ededed",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 20
  },
});

export default Title;
