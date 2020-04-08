import React, {useState} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';

const MySelect = (props: any) => {
  const [selected, setSelected] = useState();
  return (
    <View style={styles.textinputView}>
      <Text style={styles.labelText}>{props.name}</Text>
      <View style={styles.pickerView}>
        <Picker
          selectedValue={selected}
          style={styles.picker}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
          {props.options &&
            props.options.items &&
            props.options.items.length > 0 &&
            props.options.items.map((item: any, index: number) => {
              return (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  pickerView: {
    backgroundColor: '#F7F8FA',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  picker: {
    height: 55,
    width: '100%',
  },
});

export default MySelect;
