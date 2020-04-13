import React, { useEffect, useState, useCallback } from 'react';
import Container from '../../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getArbolesPOATipoReporte } from '../../services/ArbolService';
import { setDataActividad } from '../../actions/actividad.actions';
import { error, loading, destoryAlerta } from '../../actions/alerta.actions';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from '../../components/MyButton';
import { Navigation } from 'react-native-navigation';

const ReporteArrastreAnexarArbolScreen = (props: any) => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([] as any);
  const [isFetch, setIsFetch] = useState(false);
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
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );
  const closeAlerta = useCallback(
    () => dispatch(destoryAlerta()),
    [dispatch],
  );
  useEffect(() => {
    if ( props.poaId ) {
      loadingAlerta("Evaluando transacción en la red.");
      getArbolesPOATipoReporte(props.poaId, 'reporteTalaId').then( result => {
        setItems(result.data || []);
        setIsFetch(true);
        closeAlerta();
        setSelectedItems(dataActividad.arboles || []);
      } );
    } else {
      errorAlerta('Error al obtener el ID del POA.');
    }
    return () => {
    }
  }, []);
  const onPressArbol = (item: any) => {
    if( selectedItems.filter( (i: any) => i.id === item.id ).length === 0 ) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter( (i: any) => i.id !== item.id ));
    }
  };
  const onPressAnexar = () => {
    let _dataActividad = dataActividad || {};    
    _dataActividad['arboles'] = selectedItems;
    
    let _dataReporteArrastreInformacion = {} as any;
    _dataReporteArrastreInformacion = _dataActividad['ReporteArrastreInformacion'] || {};
    const keys = Object.keys(_dataReporteArrastreInformacion);
    let cantidadFilas = -1;
    let arboles_ids = [] as any;  
    let arboles_data_id = [] as any; 
    keys.forEach(element => {
      if( element.includes('informacionDetallada') ) {
        const nrow = parseInt(element.replace(/[^0-9]/g, ''));
        if ( _dataReporteArrastreInformacion ) {
          if(_dataReporteArrastreInformacion[`informacionDetallada_codigo_${nrow}`] ) {
            const _arbolId = _dataReporteArrastreInformacion[`informacionDetallada_codigo_${nrow}`].value;
            if( !arboles_ids.includes(_arbolId) ) {
              arboles_ids.push(_arbolId);
              arboles_data_id.push({ arbolId: _arbolId, nrow: nrow });
            }
          }
        }
        if( nrow >= cantidadFilas ) cantidadFilas = nrow; 
      }
    });
    let newRows = cantidadFilas;
    const diferenciaIds = selectedItems.filter( (i: any) => !arboles_ids.includes(i.id) );
    const eliminados = arboles_ids.filter( (i: any) => !selectedItems.map( (j: any) => j.id ).includes(i) );
        
    diferenciaIds.forEach((element: any) => {
      newRows = newRows + 1;
      _dataReporteArrastreInformacion[`informacionDetallada_codigo_${newRows}`] = {
        "value": element.id,
        "type": "MyTable"
      };
      _dataReporteArrastreInformacion[`informacionDetallada_especie_${newRows}`] = {
        "value": element.informacionGeneral?.especie,
        "type": "MyTable"
      };
      _dataReporteArrastreInformacion[`informacionDetallada_LARm_${newRows}`] = {
        "value": element.dimensiones?.largo,
        "type": "MyTable"
      };
      _dataReporteArrastreInformacion[`informacionDetallada_VOLm_${newRows}`] = {
        "value": element.dimensiones?.volumen,
        "type": "MyTable"
      };
    });
    eliminados.forEach((element: any) => {
      const _nrow = arboles_data_id.find( (a: any) => a.arbolId === element ).nrow;
      delete _dataReporteArrastreInformacion[`informacionDetallada_codigo_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_especie_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_LARm_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_VOLm_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_carga_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_diamMayorCm_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_diamMrenorCm_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_patio_${_nrow}`];
      delete _dataReporteArrastreInformacion[`informacionDetallada_observaciones_${_nrow}`];
    });    

    if( eliminados.length ) {
      // TODO: Cuando se elimina un arbol, no desaparece la fila en la tabla
    }

    _dataActividad['ReporteArrastreInformacion'] = _dataReporteArrastreInformacion;
    storeDataActividad(_dataActividad);
    Navigation.pop(props.componentId);
  };
  return (
    <Container>
      { isFetch && <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemButton} onPress={() => onPressArbol(item)}>
            <View style={styles.contentView}>
              <Text style={styles.itemText}>{ item.id }</Text>
              <View style={styles.infoView}>
                <Text>Reporte Tala ID: { item.reporteTalaId }</Text>
                <Text>Especie: { item.informacionGeneral.especie }</Text>
                <Text>Latitud: { item.ubicacion.latitud }</Text>
                <Text>Longitud: { item.ubicacion.longitud }</Text>
              </View>
            </View>
            <View style={[styles.iconCircleView, selectedItems.filter( (i: any) => i.id === item.id ).length > 0 && styles.iconCicrcleActiveView ]}></View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(field: any) => field.id}
      />}
      <MyButton onPress={onPressAnexar} name="Anexar arboles" />
    </Container>
  )
}

const styles = StyleSheet.create({
  itemButton: {
    padding: 15,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconCicrcleActiveView: {
    backgroundColor: '#339989'
  },
  contentView: {
    flex: 1,
    marginRight: 30
  },
  itemText: {
    fontWeight: 'bold',
    marginBottom: 15
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconCircleView: {
    borderWidth: 2,
    borderColor: '#ededed',
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

export default ReporteArrastreAnexarArbolScreen;
