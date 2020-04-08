import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import InternetStatus from './InternetStatus';

const Badge = (props: any) => {
  return (
    <View style={styles.badgeView}>
      <View style={styles.iconView}>
        <FeatherIcon name={props.icon} size={30} color="#1F2A37" />
        <InternetStatus />
      </View>
      <View style={styles.contentView}>
        <Text style={styles.valueText}>{props.value}</Text>
        <Text style={styles.descText}>{props.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeView: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff"
  },
  iconView: {
    position: "relative",
    backgroundColor: "#ededed",
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 10
  },
  contentView: {
    marginLeft: 15,
    flexDirection: "column"
  },
  valueText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  descText: {
    color: "#999999",
    width: "95%",
    fontSize: 13
  }
});

export default Badge;