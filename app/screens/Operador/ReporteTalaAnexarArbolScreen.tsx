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
