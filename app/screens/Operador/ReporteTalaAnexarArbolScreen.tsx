import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';
import { getArbolesPOA } from '../../services/ArbolService';
import Container from '../../components/Container';
import MyMapLocation from '../../components/MyMapLocation';
import { error, loading, destoryAlerta } from '../../actions/alerta.actions';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Title from '../../components/Title';
import MyButton from '../../components/MyButton';
import { setDataActividad } from '../../actions/actividad.actions';

const ReporteTalaAnexarArbolScreen = (props: any) => {
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
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([] as any);
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    if ( props.poaId ) {
      loadingAlerta("Evaluando transacción en la red.");
      getArbolesPOA(props.poaId).then( result => {
        setItems(result.data || []);
        closeAlerta();
        setIsFetch(true);
        setSelectedItems(dataActividad.arboles || []);
      } );
    } else {
      errorAlerta('Error al obtener el ID del POA.');
    }
    return () => {
    }
  }, []);
  const onPressMarker = (marker: any) => {
    if( selectedItems.filter( (i: any) => i.id === marker.id ).length === 0 ) {
      setSelectedItems([...selectedItems, marker]);
    } else {
      errorAlerta('El arbol ya se encuentra seleccionado.');
    }
  };
  const onPressEliminarArbol = (item: any) => {
    setSelectedItems(selectedItems.filter( (i: any) => i.id !== item.id ));
  };
  const onPressAnexar = () => {
    let _dataActividad = dataActividad || {};
    _dataActividad['arboles'] = selectedItems;

    //storeDataActividad(_dataActividad);
    //Navigation.pop(props.componentId);

    let _dataReporteTalaInformacion = {} as any;
    _dataReporteTalaInformacion = _dataActividad['ReporteTalaInformacion'] || {};
    const keys = Object.keys(_dataReporteTalaInformacion);
    let cantidadFilas = -1;
    let arboles_ids = [] as any;  
    let arboles_data_id = [] as any; 
    keys.forEach(element => {
      if( element.includes('informacionDetallada') ) {
        const nrow = parseInt(element.replace(/[^0-9]/g, ''));
        if ( _dataReporteTalaInformacion ) {
          if(_dataReporteTalaInformacion[`informacionDetallada_codigo_${nrow}`] ) {
            const _arbolId = _dataReporteTalaInformacion[`informacionDetallada_codigo_${nrow}`].value;
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
      _dataReporteTalaInformacion[`informacionDetallada_codigo_${newRows}`] = {
        "value": element.id,
        "type": "MyTable"
      };
      _dataReporteTalaInformacion[`informacionDetallada_especie_${newRows}`] = {
        "value": element.informacionGeneral?.especie,
        "type": "MyTable"
      };
      _dataReporteTalaInformacion[`informacionDetallada_LARm_${newRows}`] = {
        "value": element.dimensiones?.largo,
        "type": "MyTable"
      };
      _dataReporteTalaInformacion[`informacionDetallada_VOLm_${newRows}`] = {
        "value": element.dimensiones?.volumen,
        "type": "MyTable"
      };
    });
    eliminados.forEach((element: any) => {
      const _nrow = arboles_data_id.find( (a: any) => a.arbolId === element ).nrow;
      delete _dataReporteTalaInformacion[`informacionDetallada_codigo_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_especie_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_LARm_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_VOLm_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_carga_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_diamMayorCm_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_diamMrenorCm_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_patio_${_nrow}`];
      delete _dataReporteTalaInformacion[`informacionDetallada_observaciones_${_nrow}`];
    });    

    if( eliminados.length ) {
      // TODO: Cuando se elimina un arbol, no desaparece la fila en la tabla
    }

    _dataActividad['ReporteTalaInformacion'] = _dataReporteTalaInformacion;
    storeDataActividad(_dataActividad);
    Navigation.pop(props.componentId);
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.mapaView}>
        { isFetch && (
          <MyMapLocation 
            onPressMarker={onPressMarker}
            markers={items} />
        ) }
      </View>
      <View style={styles.itemsView}>
        <Title title="Arboles seleccionados" />
        <View style={styles.listaArbolesView}>
          <FlatList
            data={selectedItems}
            renderItem={({item}) => (
              <View style={styles.arbolView}>
                <Text style={styles.arbolText}>{ item.id }</Text>
                <Text>{ item.informacionGeneral.especie }</Text>
                <TouchableOpacity style={styles.eliminarButton} onPress={() => onPressEliminarArbol(item)}>
                  <Text style={styles.eliminarText}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(field: any) => field.id}
          />
        </View>
        <MyButton onPress={onPressAnexar} name={'Anexar'} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
  },
  mapaView: {
    flex: 1
  },
  itemsView: {
    width: '25%',
    borderLeftColor: '#ededed',
    borderLeftWidth: 1
  },
  listaArbolesView: {
    flex: 1
  },
  arbolView: {
    padding: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1
  },
  arbolText: {
    fontWeight: 'bold'
  },
  eliminarButton: {
    alignSelf: 'flex-end'
  },
  eliminarText: {
    color: 'red'
  }
});

export default ReporteTalaAnexarArbolScreen
