import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

const InternetStatus = () => {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const currentStatus = Boolean(state.isConnected);
      setStatus(currentStatus);
    });
    return () => {
      unsubscribe();
    };
  }, [status]);
  return (
    <View style={[styles.statusInternetView, status && styles.haveInternet ]}></View>
  );
};

const styles = StyleSheet.create({
  statusInternetView: {
    width: 10,
    height: 10,
    backgroundColor: "#999999",
    borderRadius: 5,
    position: "absolute",
    bottom: 2,
    right: 2 
  },
  haveInternet: {
    backgroundColor: "#339989"
  }
});

export default InternetStatus;