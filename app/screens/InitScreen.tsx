import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { navigateGuest, navigateIngenieroForestal, navigateOperador } from '../screens';
import Container from '../components/Container';

const InitScreen = (props: any) => {
  const requestLocationPermission = async () => {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ]).then( granted => {
      return true;
    } ).catch( error => {
      return false;
    } );
  };
  useEffect(() => {
    requestLocationPermission().then(access => {
      if ( access && props.usuario ) {
        if ( props.usuario.rol == 'IngenieroForestal' ) {
          navigateIngenieroForestal();
        } else if ( props.usuario.rol == 'Operador' ) {
          navigateOperador();
        } else {
          navigateGuest();
        }
      } else {
        navigateGuest();
      }
    });
  }, []);
  return (
    <Container style={styles.containerView}>
      <ActivityIndicator size="large" color="#02111B" />
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state: any) => {
  return {
    usuario: state.usuario.data
  }
}

export default connect(mapStateToProps)(InitScreen);