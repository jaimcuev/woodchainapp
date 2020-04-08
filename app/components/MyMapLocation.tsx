import React, { Component } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import { View, StyleSheet } from 'react-native';

class MyMapLocation extends Component {
  state = {
    longitud: 0,
    latitud: 0
  }

  componentDidMount() {
    const { setLocation } = this.props;
    const accessToken = 'pk.eyJ1IjoiamFpbWN1ZXYiLCJhIjoiY2s0cnJoa3V2MTJqYjNsbGFiaXZ3ZzhucSJ9.HTfIZRZxkZJ-pp3FqiCIjg';
    MapboxGL.setAccessToken(accessToken);
    Geolocation.getCurrentPosition( (position: any) => {
      this.setState({ longitud: position.coords.longitude, latitud: position.coords.latitude });

      console.warn("!!!!!", { longitud: position.coords.longitude, latitud: position.coords.latitude });

      setLocation( position.coords.latitude, position.coords.longitude );
    }, () => {}, {
      enableHighAccuracy: true
    } );
  }
  
  onUpdateLocation = (position: any) => {
    const { setLocation } = this.props;
    this.setState({ longitud: position.coords.longitude, latitud: position.coords.latitude });
    setLocation( position.coords.latitude, position.coords.longitude );
  }
  
  render() {
    return (
      <View style={styles.container}> 
        <MapboxGL.MapView
          style={{flex: 1}}>
            <MapboxGL.UserLocation 
              onUpdate={this.onUpdateLocation}
              visible={true} />
            <MapboxGL.Camera
              zoomLevel={18}
              centerCoordinate={[this.state.longitud, this.state.latitud]}
            />
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
  }
});

export default MyMapLocation;
