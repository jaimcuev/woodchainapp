import React, { useState, useCallback } from 'react';
import {View, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Form from '../../components/Form';
import MyMapLocation from '../../components/MyMapLocation';
import { getArboles } from '../../services/ArbolService';
import { Navigation } from 'react-native-navigation';
import RegistrarArbol from '../../models/RegistrarArbol';
import { setDataActividad } from '../../actions/actividad.actions';
import { error, success, loading } from '../../actions/alerta.actions';
import { LocalToBlockchain, mergeData } from '../../services/HelpfulFunctions';

const RegistrarArbolScreen = (props: any) => {
  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);
  const storeDataActividad = useCallback(
    (data: any) => dispatch(setDataActividad(data)),
    [dispatch],
  );
  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string, haveClose: boolean, options: any) => dispatch(success(message, haveClose, options)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [steps] = useState(RegistrarArbol);
  
  const submitForm = (data: any, localData: any) => { 
    if( latitud && longitud ) {
      loadingAlerta('Evaluando transacción en la red.');
      const _dataActividad = dataActividad;
      let _arboles = _dataActividad['arboles'] || [];
      getArboles().then( result => {
        if( result && result.data ) {
          const _existArboles = result.data;
          const existeCerca = _existArboles.filter( (ar: any) => {
            const distancia = getDistanciaMetros( 
              ar.ubicacion.latitud, ar.ubicacion.longitud, 
              latitud, longitud
            );              
            return distancia < 0.1 ? true : false;
          } );
          if ( existeCerca.length === 0 ) {
            const keys = Object.keys(localData);
            let toStore = {} as any;
            keys.forEach( key => {
              const l2b = LocalToBlockchain(localData[key], key);
              toStore = mergeData(toStore, l2b);
            } );
            toStore['ubicacion'] = { latitud, longitud };
            _arboles = [..._arboles, toStore ];
            _dataActividad['arboles'] = _arboles;
            storeDataActividad(_dataActividad);
            successAlerta('Se ha registrado el arbol correctamente.', false, [
              {
                name: 'Volver al inicio',
                onPress: () => Navigation.popToRoot(props.componentId)
              }
            ]);
          } else {
            errorAlerta('Se ha encontrado un arbol en la misma ubicación.');
          }
        } else {
          errorAlerta('Error al conectarse con el servidor.');
        }
      } );
    }
  };

  const getDistanciaMetros = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    let rad = function(x: any) {return x*Math.PI/180;}
    var R = 6378.137;
    var dLat = rad( lat2 - lat1 );
    var dLong = rad( lon2 - lon1 );
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
    Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c * 1000; 
    return d; 
  }

  const setLocation = (lat: number, lon: number) => {
    setLatitud(lat);
    setLongitud(lon);
  };

  return (
    <Container style={styles.containerView}>
      <View style={styles.basicInfoView}>
        <Form 
          submitForm={submitForm}
          local={{}}
          steps={steps} 
        />
      </View>
      <View style={styles.mapView}>
        <Title title="Ubicación del arbol" />
        <MyMapLocation setLocation={setLocation} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
  },
  basicInfoView: {
    width: '40%',
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2,
  },
  mapView: {
    flex: 1,
    flexDirection: 'column',
    borderLeftColor: '#ededed',
    borderLeftWidth: 1,
  },
  mapboxView: {
    flex: 1,
  },
});

export default RegistrarArbolScreen;