import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { eliminarReporte, getLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';

const GTFScreen = (props: any) => {
  const options = [
    {
      number: 1,
      title: 'Información general',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'GTFInformacionGeneral',
      screen: 'GTFInformacionGeneralScreen'
    },
    {
      number: 2,
      title: 'Información basica',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'GTFInformacionBasica',
      screen: 'GTFInformacionBasicaScreen'
    },
    {
      number: 3,
      title: 'Transportista',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'GTFTransportista',
      screen: 'GTFTransportistaScreen'
    },
    {
      number: 4,
      title: 'Detalle de producto',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'GTFDetalleProducto',
      screen: 'GTFDetalleProductoScreen'
    },
  ];
  const [procesOptions, setProcesOptions] = useState(options);
  const onPressEnviar = () => {

  };
  const onPressEliminar = () => {
    Navigation.popToRoot(props.componentId);
  };
  return (
    <Container stryle={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
        <View style={styles.optionItemsView}>
          {procesOptions.map((option: any, index) => {
            return (
              <View key={option.number} style={[styles.optionContainerView]}>
                <Option
                  number={option.number}
                  title={option.title}
                  onPress={() =>
                    NavigateTo(props.componentId, option.screen, option.title, { data: option.data })
                  }
                  subtitle={option.subtitle}
                  actionName={option.actionName}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <View style={styles.optionContainerView}>        
          <Option
            title={'Enviar GTF'}
            subtitle={'Envia todos los datos del GTF. Una ves realizado, \nno se podra realizar ningun cambio.'}
            optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
            buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "#999999" }}
            onPress={onPressEnviar}
            actionName={'Generar transacción'}
          />
          <Option
            title={'Eliminar GTF'}
            subtitle={'Elimina los datos registrados del GTF hasta el momento. \nAsimismo, se eliminaran todos los datos de los arboles \nregistrados hasta el momento.'}
            optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
            buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "red" }}
            onPress={onPressEliminar}
            actionName={'Eliminar'}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row'
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
  contentView: {
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
    flex: 1
  },
  sidebarView: {
    width: "35%",
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

export default GTFScreen;