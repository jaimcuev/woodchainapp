import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { View, Text, StyleSheet } from 'react-native';

const MyCheckbox = (props: any) => {
  const [checkbox, setCheckbox] = useState(false)
  return (
    <View style={styles.checkboxView}>
      <CheckBox value={checkbox} />
      <Text style={styles.labelText}> {props.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  labelText: {
		textTransform: "uppercase",
		fontSize: 12,
		fontWeight: "bold",
		color: "#666666"
	},
})

export default MyCheckbox