import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { navigateIngenieroForestal, navigateOperador } from '../screens';
import { Login } from '../services/AuthService';
import MyTextInput from '../components/MyTextInput';
import Container from '../components/Container';
import { setUsuario } from '../actions/usuario.actions';
import { error, loading } from '../actions/alerta.actions';

const LoginScreen = (props: any) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const storeUsuario = useCallback(
    (data: any) => dispatch(setUsuario(data)),
    [dispatch],
  );
  const onPressLogin = () => {
    if( username != "" && password != "" ) {
      loadingAlerta("Evaluando transacción en la red.");
      Login(username, password).then( respuesta => {
        if( respuesta.status ) {
          if( respuesta.data && respuesta.data.rol == "IngenieroForestal" ) {
            storeUsuario(respuesta.data);
            navigateIngenieroForestal();
          } else if( respuesta.data && respuesta.data.rol == "Operador" ) {
            storeUsuario(respuesta.data);
            navigateOperador();
          } else {
            errorAlerta("El rol asignado a tu cuenta no tiene permisos para acceder a la aplicación.");
          }
        } else {
          errorAlerta(respuesta.message);
        }
      } );
    } else {
      errorAlerta("Debes completar los campos de usuario y contraseña para poder ingresar.");
    };
  };
  return (
    <Container 
      style={styles.containerView}>
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      <View style={styles.loginView}>
        <MyTextInput 
          name="Correo electronico" 
          value={username} 
          onChange={ (id: string, text: string) => setUsername(text) }
        />
        <MyTextInput 
          name="Contraseña" 
          value={password} 
          secureTextEntry={true}
          onChange={ (id: string, text: string) => setPassword(text) }
        />
        <TouchableOpacity onPress={onPressLogin} style={styles.loginButton}>
          <Text style={styles.labelButton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginView: {
    width: '30%',
    shadowColor: '#000',
    padding: 20,
    backgroundColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  logoImage: {
    marginBottom: 30,
    width: 120,
    height: 90
  },
  loginButton: {
    backgroundColor: '#339989',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  labelButton:{
    color: '#FFF',
  }
});

export default LoginScreen;