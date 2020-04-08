import React, {useEffect, useState} from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const MyMap = (props: any) => {
  const [coordenadas, setCoordenadas] = useState([]);
  useEffect(() => {
    const accessToken = 'pk.eyJ1IjoiamFpbWN1ZXYiLCJhIjoiY2s0cnJoa3V2MTJqYjNsbGFiaXZ3ZzhucSJ9.HTfIZRZxkZJ-pp3FqiCIjg';
    MapboxGL.setAccessToken(accessToken);
    storeCoordenadas(props.defaultValue);    
    return () => {};
  }, []);
  let mapRef: any = React.createRef();
  const onPressMap = (a: any) => {
    storeCoordenadas([...coordenadas, a.geometry.coordinates]);
  };
  const onPressBorrarTodo = () => {
    storeCoordenadas([]);
  };
  const onPressAtras = () => {
    var _coordenadas = [] as any;
    coordenadas.forEach((element, index) => {
      if (!(index === coordenadas.length - 1)) {
        _coordenadas.push(element);
      }
    });
    storeCoordenadas(_coordenadas);
  };
  const storeCoordenadas = (coordenadas: any) => {
    setCoordenadas(coordenadas);
    props.onChange(props.id, coordenadas, 'MyMap');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{props.name}</Text>
      <View style={styles.optionsView}>
        <TouchableOpacity onPress={onPressAtras} style={styles.optionButton}>
          <FeatherIcon name="skip-back" size={20} color="#999999" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressBorrarTodo}
          style={[styles.optionButton, styles.lastOptionButton]}>
          <FeatherIcon name="trash" size={20} color="#999999" />
        </TouchableOpacity>
      </View>
      <MapboxGL.MapView
        onPress={a => onPressMap(a)}
        styleURL={'mapbox://styles/mapbox/streets-v11'}
        ref={mapRef}
        style={{flex: 1}}>
        <MapboxGL.Camera
          centerCoordinate={[-35.15165038, 40.6235728]}
          zoomLevel={2}
        />
        <MapboxGL.ShapeSource
          id="smileyFaceSource"
          shape={{
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Polygon',
                  coordinates: [coordenadas],
                },
              },
            ],
          }}>
          <MapboxGL.FillLayer
            id="smileyFaceFill"
            style={{
              fillAntialias: true,
              fillOpacity: 0.5,
              fillColor: '#339989',
              fillOutlineColor: '#339989',
            }}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: 600,
    width: '100%',
    marginBottom: 20,
  },
  labelText: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  optionsView: {
    position: 'absolute',
    flexDirection: 'column',
    zIndex: 10,
    backgroundColor: 'white',
    top: 35,
    right: 15,
    borderRadius: 4,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
  },
  lastOptionButton: {
    borderBottomWidth: 0,
  },
});

export default MyMap;
