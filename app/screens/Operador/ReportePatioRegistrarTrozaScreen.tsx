import React, { useEffect, useState, useCallback } from 'react';
import Container from '../../components/Container';
import { getArbolesPOATipoReporte, trozadoArbol } from '../../services/ArbolService';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Title from '../../components/Title';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import { loading, error, setMessage, destoryAlerta, success } from '../../actions/alerta.actions';
import { createTroza } from '../../services/TrozaService';
import { setDataActividad } from '../../actions/actividad.actions';

const ReportePatioRegistrarTrozaScreen = (props: any) => {
  // States del formulario de trozas
  const [largo, setLargo] = useState("");
  const [diametro, setDiametro] = useState("");
  const [volumen, setVolumen] = useState('');

  const [arboles, setArboles] = useState([] as any);
  const [arbolesVisibles, setArbolesVisibles] = useState([] as any);
  const [currentArbol, setCurrentArbol] = useState({} as any);
  const [trozas, setTrozas] = useState([] as any);

  const dispatch = useDispatch();
  const dataActividad = useSelector((state: any) => state.actividad.data);

  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string) => dispatch(success(message)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const cambiarMensajeAlerta = useCallback(
    (message: string) => dispatch(setMessage(message)),
    [dispatch],
  );
  const cerrarAlerta = useCallback(
    () => dispatch(destoryAlerta()),
    [dispatch],
  );

  const guardarTrozas = useCallback(
    (data: any) => dispatch(setDataActividad(data)),
    [dispatch],
  );

  useEffect(() => {
    if( props.poaId ) {
      loadingAlerta("Evaluando transacción en la red.");
      getArbolesPOATipoReporte(props.poaId, 'reporteArrastreId').then( (result: any) => {
        if( result && result.data ) {
          setArboles( result.data );

          const trozitas = dataActividad['trozas'] || [];
          setTrozas(trozitas);

          cerrarAlerta();
        } else {
          errorAlerta('No se ha encontrado ningun arbol asociado.');
        }
      } );
    } else {
      errorAlerta('Error al determinar el POA asociado. Por favor, vuelva a intentarlo.');
    }
    return () => {
    }
  }, []);

  useEffect(() => {
    const __arboles = arboles.filter( (i: any) => i.trozado < i.informacionGeneral.maximoTrozas );
    setArbolesVisibles( __arboles );

    

    return () => {
    }
  }, [arboles]);

  const onPressArbol = (item: any) => {
    if( !currentArbol.id ) {
      setCurrentArbol( item );
    } else {
      errorAlerta('Ya existe un arbol activo. Finaliza el trozado para seleccionar otro.');
    }
  };

  const onPressRegistrarTroza  = () => {
    if( currentArbol && currentArbol.id ) {
      if( largo && diametro && volumen ) {      
        const min = currentArbol.informacionGeneral.minimoTrozas;
        const max = currentArbol.informacionGeneral.maximoTrozas;
        const findArbolesEnTrozas = trozas.filter( (i: any) => i.arbolId === currentArbol.id );
        if( findArbolesEnTrozas.length < max ) {
          loadingAlerta("Enviando transacción en la red.");
          trozadoArbol(currentArbol.id).then( (resultado: any) => {
            cambiarMensajeAlerta('Estado del arbol actualizado.');
            if( resultado && resultado.data && resultado.data.id ) {
              const arbolActualizado = resultado.data;
              setArboles( arboles.map( (_arbol: any) => {
                return _arbol.id === arbolActualizado.id ? arbolActualizado : _arbol;
              } ) );

              const troza = {
                arbolId: currentArbol.id,
                genericId: Math.random().toString(36).substr(2, 9),
                largo, diametro, volumen,
                poaId: props.poaId,
                minimoTrozasArbol: min,
                maximoTrozasArbol: max,
                especie: currentArbol.informacionGeneral.especie,
                seccion: arbolActualizado.trozado
              } as any;

              if( parseInt(arbolActualizado.trozado) === parseInt(arbolActualizado.informacionGeneral.maximoTrozas) ) {
                setCurrentArbol({} as any);
              }

              createTroza(troza).then( (result: any) => {
                const datatmclt = JSON.parse(result.data); // esta es la troza
                if( datatmclt && datatmclt.id ) {
                  successAlerta('Troza registrada en la red correctamente.');
                  setTrozas([...trozas, datatmclt]);
                  setDiametro('');
                  setLargo('');
                  setVolumen('');
                  const _dataActividad = dataActividad;
                  _dataActividad['trozas'] =  _dataActividad['trozas'] || [];
                  _dataActividad['trozas'].push( datatmclt );
                  
                  
                  const _dataReportePatioInformacion = _dataActividad['ReportePatioInformacion'] || {};
                  const keys = Object.keys(_dataReportePatioInformacion);
                  let cantidadFilas = -1;
                  keys.forEach(element => {
                    if( element.includes('informacionDetallada') ) {
                      const nrow = parseInt(element.replace(/[^0-9]/g, ''));
                      if( nrow >= cantidadFilas ) cantidadFilas = nrow; 
                    }
                  });
                  let newRows = cantidadFilas;
                  

                  newRows = newRows + 1;
                  _dataReportePatioInformacion[`informacionDetallada_correlativoTroza_${newRows}`] = {
                    "value": datatmclt.id,
                    "type": "MyTable"
                  };
                  _dataReportePatioInformacion[`informacionDetallada_especie_${newRows}`] = {
                    "value": datatmclt.especie,
                    "type": "MyTable"
                  };
                  _dataReportePatioInformacion[`informacionDetallada_numSeccion_${newRows}`] = {
                    "value": datatmclt.seccion.toString(),
                    "type": "MyTable"
                  };

                  _dataActividad['ReportePatioInformacion'] = _dataReportePatioInformacion;
                  
                  guardarTrozas(_dataActividad);

                } else {
                  errorAlerta('Se ha producido un error al enviar la transacción.');
                }
              } );
            } else {
              errorAlerta('Se ha producido un error al enviar la transacción.');
            }
          } );
        } else {
          errorAlerta(`Ya se ha registrado el numero maximo de trozas (${max}) para este arbol.`);
        }
      } else {
        errorAlerta('Debes completar todos los campos para continuar.');
      }
    } else {
      errorAlerta('Debes tener un arbol activo para poder finalizar la etapa de trozado.');
    }
  };

  return (
    <Container style={styles.containerView}>
      <View style={[styles.columnView, { borderRightColor: '#ededed', borderRightWidth: 1 }]}>
        <Title title="Lista de arboles" />
        { arbolesVisibles.length === 0 && <Text style={{ padding: 15 }}>No hay arboles disponibles.</Text> }
        <FlatList
          data={arbolesVisibles}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemArbolView} onPress={() => onPressArbol(item)}>
              <Text style={{ fontWeight: 'bold' }}>{ item.id }</Text>
              <Text>Especie: { item.informacionGeneral.especie }</Text>
              <Text>Reporte Tala ID: { item.reporteTalaId }</Text>
              <Text>Reporte Arrastre ID: { item.reporteArrastreId }</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(field: any) => field.id}
        />
      </View>
      <View style={[styles.columnView, { borderRightColor: '#ededed', borderRightWidth: 1 }]}>
        <Title title="Trozas del arbol seleccionado" />
        <View style={{ flex: 1, padding: 15 }}>
        { currentArbol && currentArbol.id && <Text style={{ fontWeight: 'bold', marginBottom: 15 }}>{ currentArbol.id }</Text> }
        <MyTextInput name="Volumen" 
        value={volumen} 
        onChange={ (id: string, text: string) => setVolumen(text) } />
        <MyTextInput name="Diametro"
          value={diametro} 
          onChange={ (id: string, text: string) => setDiametro(text) } />
        <MyTextInput name="Largo" 
          value={largo} 
          onChange={ (id: string, text: string) => setLargo(text) } />
        </View>
        <View style={styles.buttonsView}>
          <MyButton onPress={onPressRegistrarTroza} style={{ flex: 1, borderRadius: 0 }} name="Registrar Trozas del arbol" />
        </View>
      </View>
      <View style={styles.columnView}>
        <Title title="Trozas creadas" />
        <FlatList
          data={trozas}
          renderItem={({item}) => (
            <View style={styles.itemArbolView}>
              <Text style={{ fontWeight: 'bold' }}>{ item.id }</Text>
              <Text>Especie: { item.especie }</Text>
              <Text>Sección del arbol: { item.seccion }</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(field: any) => field.id}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
  },
  columnView: {
    flex: 1
  },
  itemArbolView: {
    padding: 15,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1
  },
  buttonsView: {
    flexDirection: 'row'
  }
});

export default ReportePatioRegistrarTrozaScreen;
