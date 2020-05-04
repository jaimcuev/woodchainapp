import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { getLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';
import ActividadAcciones from '../../components/ActividadAcciones';
import { setMessage, error, success } from '../../actions/alerta.actions';
import { useSelector, useDispatch } from 'react-redux';
import { createGTF } from '../../services/GTFService';
import { anexarGTF } from '../../services/TrozaService';

const GTFScreen = (props: any) => {
  const dispatch = useDispatch();
  const usuario = useSelector((state: any) => state.usuario.data);
  const errorAlerta = useCallback(
    (message: string, haveClose: boolean = true, options: any = []) => dispatch(error(message, haveClose, options)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string, haveClose: boolean, options: any) => dispatch(success(message, haveClose, options)),
    [dispatch],
  );
  const cambiarMensajeAlerta = useCallback(
    (message: string) => dispatch(setMessage(message)),
    [dispatch],
  );

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
    {
      number: 5,
      title: 'Lista de trozas',
      subtitle: 'Subtitulo de la accion',
      actionName: 'Iniciar',
      id: 'GTFRegistrarListaTrozas',
      screen: 'GTFRegistrarListaTrozasScreen'
    },
  ];
  const [procesOptions, setProcesOptions] = useState(options);
  
  const onPressEnviar = (anexo: string, data: any) => {
    if( data && anexo ) {
      let dataSubmit = data;
      const getTrozas = (_data: any) => {
        const _trozas = _data['GTFRegistrarListaTrozas']['listadoTrozasCuartonesMovilizar'];
        const _keys = Object.keys(_trozas);
        const _returnTrozas = _keys.map( i => {
          const t = _trozas[i];
          return t.codificacion;
        } );
        return _returnTrozas;
      };
      let trozas = getTrozas(dataSubmit); 
      dataSubmit.poaId = anexo;
        const usuarioId = usuario.id;
          if ( usuarioId ) {
            dataSubmit['usuarioId'] = usuarioId;
            createGTF(dataSubmit).then(resultado => {
              console.warn(resultado);
              if (resultado.status) {
                const gtfId = resultado.data;

                const anexarTrozas = (data: any, callback: Function, index = 0) => {
                  const troza = data[index];
                  cambiarMensajeAlerta(`Anexando Troza ${troza}.`);
                  anexarGTF(troza, gtfId).then((respuestica) => {
                    if (data.length - 1 === index) {
                      callback();
                    } else {
                      anexarTrozas(data, callback, index + 1);
                    }
                  });
                }
                anexarTrozas(trozas, () => {
                  props.deleteActividad();
                  successAlerta( 'Transacción finalizada.', false, [
                    {
                      name: 'Volver al Inicio',
                      onPress: () => Navigation.popToRoot(props.componentId)
                    }
                  ] );
                });


                props.deleteActividad();
                Navigation.popToRoot(props.componentId);
              } else {
                
              }
            });
          } else {
            errorAlerta('Error al determinar al usuario.');
          }
    } else {
      errorAlerta('No se han encotrado trozas registradas.', false, [
        {
          name: 'Volver atras',
          onPress: () => Navigation.pop(props.componentId)
        }
      ]);
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
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones
          name={`GTF`}
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