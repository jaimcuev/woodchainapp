import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { Navigation } from 'react-native-navigation';
import { eliminarPGMF } from '../../services/IFService';

const PGMFScreen = (props: any) => {
  const onPressEliminar = () => {
    eliminarPGMF().then( status => {
      if( status ) {
        Navigation.popToRoot(props.componentId);
      }
    });
  };
  const onPressEnviar = () => {
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <Option
          title={'Enviar PGMF'}
          subtitle={'Envia todos los datos del PGMF. Una ves realizado, \nno se podra realizar ningun cambio.'}
          optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
          buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "#999999" }}
          onPress={onPressEnviar}
          actionName={'Generar transacción'}
        />
        <Option
          title={'Eliminar PGMF'}
          subtitle={'Elimina los datos registrados del PGMF hasta el momento. \nAsimismo, se eliminaran todos los datos de los arboles \nregistrados hasta el momento.'}
          optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
          buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "red" }}
          onPress={onPressEliminar}
          actionName={'Eliminar'}
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
  },
  optionItemsView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexWrap: 'wrap',
  },
  optionContainerView: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default PGMFScreen;
