import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Form from '../../components/Form';
import MyMapLocation from '../../components/MyMapLocation';
import { registrarArbol, getArboles } from '../../services/IFService';
import { Navigation } from 'react-native-navigation';
import RegistrarArbol from '../../models/RegistrarArbol';
import { connect } from 'react-redux';

const RegistrarArbolScreen = (props: any) => {
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [steps] = useState(RegistrarArbol);
  const submitForm = (data: any, localData: any) => {
    console.warn("=>", latitud, longitud);
    if( latitud && longitud ) {
      /*
      getArboles().then( arboles => {
        const existArbolLatlong = arboles ? arboles.find( (ar: any) => ar.ubicacion_longitud.value === longitud && ar.ubicacion_latitud.value === latitud ) : false;
        if( existArbolLatlong ) {
          console.warn("EL ARBOL YA EXISTE");
        } else {
          localData.ubicacion_longitud = { value: longitud, type: 'MyMapLocation' };
          localData.ubicacion_latitud = { value: latitud, type: 'MyMapLocation' };
          registrarArbol(data, localData).then( status => {
            if( status ) {
              Navigation.popToRoot(props.componentId);
            }
          } );
        }
      } );
      */
    }
  };
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

const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrarArbolScreen);