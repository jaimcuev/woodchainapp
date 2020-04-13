import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { Navigation } from 'react-native-navigation';
import ActividadAcciones from '../../components/ActividadAcciones';
import { createReporte } from '../../services/ReporteService';
import { anexarReportePatio } from '../../services/TrozaService';
import { useDispatch } from 'react-redux';
import { error, success } from '../../actions/alerta.actions';

const ReportePatioScreen = (props: any) => {
  const dispatch = useDispatch();
  const errorAlerta = useCallback(
    (message: string, haveClose: boolean) => dispatch(error(message, haveClose)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string, haveClose: boolean, options: any) => dispatch(success(message, haveClose, options)),
    [dispatch],
  );

  const options = [
    {
      number: 1,
      title: 'Información general',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'ReportePatioInformacion',
      screen: 'ReportePatioInformacionScreen'
    }
  ];
  const [procesOptions, setProcesOptions] = useState(options);
  const onPressRegistrarTroza = () => {
    NavigateTo(props.componentId, 'ReportePatioRegistrarTrozaScreen', 'Registrar Trozas', { 
      poaId: props.poaId 
    });
  };
  const onPressEnviar = (anexo: string, data: any) => {
    if( data && data.trozas && anexo ) {
      let dataSubmit = data;
      let trozas = dataSubmit.trozas;
      delete dataSubmit.trozas;
      dataSubmit.tipoReporte = 'ReportePatio';
      dataSubmit.poaId = anexo;
      createReporte(dataSubmit).then( (response) => {
        const reporteId = response.data;
        const anexarTrozas = (data: any, callback: Function, index = 0) => {
          const troza = data[index];
          anexarReportePatio(troza.id, reporteId).then( (resultado) => {
            if( resultado.data.message ) {
            } else {
            }
            if (data.length - 1 === index) {
              callback();
            } else {
              anexarTrozas(data, callback, index + 1);
            }
          } );
        }
        anexarTrozas( trozas, () => {
          props.deleteActividad();
          successAlerta('Transacción enviada correctamente.', false, [
            {
              name: 'Volver al inicio',
              onPress: () => Navigation.popToRoot(props.componentId)
            }
          ]);
        } );
      } );
    }
  };
  return (
    <Container style={styles.containerView}>
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
        <Title title="Accesos Directos" />
        <View style={styles.optionItemsView}>
          <View style={[styles.optionContainerView]}>
            <Option
              number={1}
              title={'Registrar Troza'}
              subtitle={'Subtitulo de la accion'}
              onPress={onPressRegistrarTroza}
              actionName={'Ingresar'}
            />
          </View>
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones
          name={`Reporte de Patio`}
          componentId={props.componentId} 
          deleteActividad={props.deleteActividad}
          onPressEnviar={onPressEnviar}
          excludeEstructurar={['trozas']}
        />
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
    width: '100%'
  },
  contentView: {
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
    flex: 1
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

export default ReportePatioScreen;