import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { eliminarReporte, getLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';

const ReporteArrastreScreen = (props: any) => {
  const options = [
    {
      number: 1,
      title: 'Información general',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'ReporteArrastreInformacion',
      screen: 'ReporteArrastreInformacionScreen'
    }
  ];
  const [isFetch, setIsFetch] = useState(false);
  const [procesOptions, setProcesOptions] = useState(options);
  useNavigationComponentDidAppear(e => {
    getLocalReporte().then( result => {
      setIsFetch(true);
      if( result ) {
        const data = procesOptions.map( (item: any) => {
          item.data = result[item.id] || {};
          item.actionName = result[item.id] ? 'Continuar' : 'Iniciar';
          return item;
        } )
        setProcesOptions(data);
      }
    } );
    return () => {
    }
  }, props.componentId);
  const onPressEnviar = () => {

  };
  const onPressEliminar = () => {
    eliminarReporte().then( status => {
      if( status ) {
        Navigation.popToRoot(props.componentId);
      }
    } )
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
        { isFetch && <View style={styles.optionItemsView}>
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
        </View> }
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <View style={styles.optionContainerView}>        
          <Option
            title={'Enviar Reporte de Arrastre'}
            subtitle={'Envia todos los datos del Reporte de Arrastre. Una ves realizado, \nno se podra realizar ningun cambio.'}
            optionItemView={{flexDirection: 'column', alignItems: 'flex-start'}}
            buttonStyle={{ marginLeft: 15, marginTop: 15, backgroundColor: "#999999" }}
            onPress={onPressEnviar}
            actionName={'Generar transacción'}
          />
          <Option
            title={'Eliminar Reporte de Arrastre'}
            subtitle={'Elimina los datos registrados del Reporte de Arrastre hasta el momento. \nAsimismo, se eliminaran todos los datos de los arboles \nregistrados hasta el momento.'}
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
    flexDirection: 'column'
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
  },
  sidebarView: {
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

export default ReporteArrastreScreen;