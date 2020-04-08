import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Alerta from './Alerta';

const Container = (props: any) => {
  return (
    <ImageBackground 
      source={require('../assets/loginbackground.jpg')} 
      style={[styles.loginBackground, props.style && props.style ]}>
        { props.children }
        <Alerta />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginBackground: {
    width: '100%',
    height: '100%'
  }
});

export default Container;