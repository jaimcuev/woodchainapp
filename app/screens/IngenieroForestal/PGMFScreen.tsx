import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Title from '../../components/Title';
import ActividadAcciones from '../../components/ActividadAcciones';

const PGMFScreen = (props: any) => {
  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones 
          componentId={props.componentId}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
  },
  contentView: {
    flex: 1,
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
  },
  sidebarView: {
    width: '35%',
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 2,
  }
});

export default PGMFScreen;
