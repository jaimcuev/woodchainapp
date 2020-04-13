import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, PermissionsAndroid, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { navigateGuest, navigateIngenieroForestal, navigateOperador } from '../screens';
import Container from '../components/Container';

const InitScreen = () => {
  const usuario = useSelector((state: any) => state.usuario.data);
  const [isFetch, setIsFetch] = useState(false);
  const requestLocationPermission = async () => {
    return PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    ]).then( granted => {
      if( 
        granted["android.permission.ACCESS_COARSE_LOCATION"] === 'denied' || 
        granted["android.permission.ACCESS_FINE_LOCATION"] === 'denied' 
      ) {
        return false;
      }
      return true;
    } ).catch( error => {
      return false;
    } );
  };
  useEffect(() => {
    requestLocationPermission().then( (access: boolean) => {
      setIsFetch(true);
      if ( access && usuario ) {
        switch (usuario.rol) {
          case 'IngenieroForestal':
            navigateIngenieroForestal();
            break;
          case 'Operador':
            navigateOperador();
            break;
          default:
            navigateGuest();
            break;
        }
      }
    });
  }, []);
  return (
    <Container style={styles.containerView}>
      { isFetch ? (
        <Text>Se ha producido un error al obtener los permisos requeridos para la aplicación. 
          Porfavor, vuelva a abrir la aplicación.</Text>
      ) : <ActivityIndicator  size="large" color="#02111B" /> }
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitScreen;