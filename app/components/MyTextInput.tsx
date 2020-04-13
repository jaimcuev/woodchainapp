import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const MyTextInput = (props: any) => {
  return (
    <View style={styles.textinputView}>
      <Text style={styles.labelText}>{props.name}</Text>
      <TextInput
        style={styles.textInput}
        value={props.value}
        defaultValue={props.defaultValue}
        onChangeText={(text: string) =>
          props.onChange && props.onChange(props.id, text, 'MyTextInput')
        }
        placeholder={ props.placeholder || props.name }
        secureTextEntry={ props.secureTextEntry || false }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F7F8FA',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 55,
  },
  labelText: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  textinputView: {
    marginBottom: 20,
  },
});

export default MyTextInput;
