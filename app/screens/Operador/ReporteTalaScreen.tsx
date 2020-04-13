import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import ActividadAcciones from '../../components/ActividadAcciones';
import options from '../../models/ReporteTala';
import { createReporte } from '../../services/ReporteService';
import { anexarReporteTala } from '../../services/ArbolService';
import { error, success, loading, setMessage } from '../../actions/alerta.actions';
import { Navigation } from 'react-native-navigation';

const ReporteTalaScreen = (props: any) => {
  const dispatch = useDispatch();
  const errorAlerta = useCallback(
    (message: string, haveClose: boolean) => dispatch(error(message, haveClose)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string, haveClose: boolean, options: any) => dispatch(success(message, haveClose, options)),
    [dispatch],
  );
  const onPressAnexarArbol = () => {
    NavigateTo(props.componentId, 'ReporteTalaAnexarArbolScreen', 'Anexar Arbol', { 
      poaId: props.poaId 
    });
  };
  const onPressEnviar = (anexo: string, data: any) => {
    if( data && data.arboles && anexo ) {
      let dataSubmit = data;
      let arboles = dataSubmit.arboles;
      delete dataSubmit.arboles;
      dataSubmit.tipoReporte = 'ReporteTala';
      dataSubmit.poaId = anexo;
      createReporte(dataSubmit).then( (response) => {
        const reporteId = response.data;
        const anexarArboles = (data: any, callback: Function, index = 0) => {
          const arbol = data[index];
          anexarReporteTala(arbol.id, reporteId).then( (resultado) => {
            if( resultado.data.message ) {
            } else {
            }
            if (data.length - 1 === index) {
              callback();
            } else {
              anexarArboles(data, callback, index + 1);
            }
          } );
        }
        anexarArboles( arboles, () => {
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
          {options.map((option: any, index) => {
            return (
              <View key={option.number} style={[styles.optionContainerView]}>
                <Option
                  number={option.number}
                  title={option.title}
                  onPress={() =>
                    NavigateTo(props.componentId, option.screen, option.title)
                  }
                  subtitle={option.subtitle}
                  actionName={'Ingresar'}
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
              title={'Anexar Arbol'}
              subtitle={'Subtitulo de la accion'}
              onPress={onPressAnexarArbol}
              actionName={'Ingresar'}
            />
          </View>
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones 
          name={`Reporte de Tala`}
          componentId={props.componentId} 
          deleteActividad={props.deleteActividad}
          onPressEnviar={onPressEnviar}
          excludeEstructurar={['arboles']}
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
    width: "100%"
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
  },
  optionContainerView: {
    width: '100%',
    paddingHorizontal: 20,
  }
});

export default ReporteTalaScreen;