import React, { Component } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MyMapLocation extends Component {
  state = {
    longitud: 0,
    latitud: 0,
    markers: []
  }

  componentDidMount() {
    const { setLocation, markers, fakeLocation } = this.props;
    const accessToken = 'pk.eyJ1IjoiamFpbWN1ZXYiLCJhIjoiY2s0cnJoa3V2MTJqYjNsbGFiaXZ3ZzhucSJ9.HTfIZRZxkZJ-pp3FqiCIjg';
    MapboxGL.setAccessToken(accessToken);
    this.setState({ markers: markers || [] });
    Geolocation.getCurrentPosition( (position: any) => {
      this.setState({ longitud: position.coords.longitude, latitud: position.coords.latitude });
      if( setLocation ) {
        setLocation( position.coords.latitude, position.coords.longitude );
      }
    }, () => {}, {
      enableHighAccuracy: true
    } );
  }
  
  onUpdateLocation = (position: any) => {
    const { setLocation } = this.props;
    this.setState({ longitud: position.coords.longitude, latitud: position.coords.latitude });
    if( setLocation ) {
      setLocation( position.coords.latitude, position.coords.longitude );
    }
  }
  
  onPressMarker(marker: any) {
    if( this.props.onPressMarker ) {
      this.props.onPressMarker(marker);
    }
  }

  render() {
    return (
      <View style={styles.container}> 
        <MapboxGL.MapView
          styleURL={'mapbox://styles/mapbox/satellite-v9'}
          style={{flex: 1}}>
            <MapboxGL.UserLocation 
              onUpdate={this.onUpdateLocation}
              visible={true} 
            />
            <MapboxGL.Camera
              zoomLevel={18}
              //centerCoordinate={[this.state.longitud, this.state.latitud]}
              centerCoordinate={[ -77.069986 , -12.089278 ]}
            />
            { this.state.markers && this.state.markers.length > 0 ? (
              this.state.markers.map( (marker: any) => {
                return <MapboxGL.PointAnnotation 
                  key={marker.id} 
                  id={marker.id} 
                  onSelected={() => this.onPressMarker(marker)}
                  coordinate={[ 
                  parseFloat(marker.ubicacion.longitud), 
                  parseFloat(marker.ubicacion.latitud) 
                ]} />
              } )
            ) : null }


        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  markerButton: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 5
  }
});

export default MyMapLocation;
