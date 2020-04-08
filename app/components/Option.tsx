import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Option = (props: any) => {
  return (
    <View style={[styles.optionItemView, props.optionItemView]}>
      <View style={styles.optionContentView}>
        <Text style={styles.optionNumber}>{props.number}</Text>
        <View>
          <Text style={styles.optionNameText}>{props.title}</Text>
          <Text style={styles.optionSubtitleText}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.optionsView}>
        {props.customAction && (
          <TouchableOpacity
            style={[styles.optionButton, styles.optionCustomButton]}
            onPress={() => props.customAction.onPress(props.number)}>
            <Text style={styles.optionTextButton}>
              {props.customAction.name}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          disabled={props.actionDisabled}
          style={[styles.optionButton, props.buttonStyle && props.buttonStyle, props.actionDisabled && styles.optionDisabledButton]}
          onPress={props.onPress && props.onPress}>
          <Text style={styles.optionTextButton}>{props.actionName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    alignItems: 'center',
  },
  optionSubtitleText: {
    color: '#999999',
    fontSize: 13,
  },
  optionButton: {
    backgroundColor: '#339989',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    width: 150,
  },
  optionDisabledButton: {
    backgroundColor: "#999999"
  },
  optionCustomButton: {
    backgroundColor: '#E83E3E',
    marginRight: 20,
  },
  optionNameText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
  },
  optionTextButton: {
    color: '#ffffff',
  },
  optionNumber: {
    color: '#94DA46',
    marginRight: 15,
    fontWeight: 'bold',
    fontSize: 40,
  },
  optionContentView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Option;
