import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Title from '../../components/Title';
import Option from '../../components/Option';
import { NavigateTo } from '../../services/HelpfulFunctions';
import { Navigation } from 'react-native-navigation';
import { createPOA } from '../../services/POAService';
import { createArbol } from '../../services/ArbolService';
import ActividadAcciones from '../../components/ActividadAcciones';
import POA from '../../models/POA';
import { error, success, setMessage } from '../../actions/alerta.actions';

const POAScreen = (props: any) => {
  const dispatch = useDispatch();
  const empresa = useSelector((state: any) => state.anexo.data.id);
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

  const [procesOptions, setProcesOptions] = useState(POA);
  const onPressEnviar = (anexo: string, data: any) => {
    if( data && data.arboles && anexo ) {
      let dataSubmit = data;
      let arboles = dataSubmit.arboles;
      delete dataSubmit.arboles;
      if ( empresa ) {
        const usuarioId = usuario.id;
          if ( usuarioId ) {
            dataSubmit['POAInformacionGeneral'] = dataSubmit['POAInformacionGeneral'] || {};
            dataSubmit['POAInformacionGeneral']['ingenieroForestal'] = dataSubmit['POAInformacionGeneral']['ingenieroForestal'] || {};
            dataSubmit['POAInformacionGeneral']['ingenieroForestal']['usuarioId'] = usuarioId;
            dataSubmit['parentUsuario'] = empresa;
            createPOA(dataSubmit).then(resultado => {
              if (resultado.status) {
                const poaId = resultado.data;
                cambiarMensajeAlerta(`Se ha registrado el POA ${poaId} correctamente.`);
                const _arboles = arboles.map((item: any) => {
                  item.poaId = poaId;
                  return item;
                });
                const registrarArboles = (data: any, callback: Function, index = 0) => {
                  const baby_arbol = data[index];
                  cambiarMensajeAlerta(`Enviando la transacción de registro del arbol ${index + 1}.`);
                  createArbol(baby_arbol).then((respuestica) => {
                    // console.warn(respuestica);
                    if (data.length - 1 === index) {
                      callback();
                    } else {
                      registrarArboles(data, callback, index + 1);
                    }
                  });
                }
                registrarArboles(_arboles, () => {
                  props.deleteActividad();
                  successAlerta( 'Transacción finalizada.', false, [
                    {
                      name: 'Volver al Inicio',
                      onPress: () => Navigation.popToRoot(props.componentId)
                    }
                  ] );
                });
              } else {
                
              }
            });
          } else {
            errorAlerta('Error al determinar al usuario.');
          }
      } else {
        errorAlerta('Error al determinar la empresa anexada. Porfavor volver a intentarlo.');
      }
    } else {
      errorAlerta('No se han encotrado arboles registrados.', false, [
        {
          name: 'Volver atras',
          onPress: () => Navigation.pop(props.componentId)
        }
      ]);
    }
  };

  const mergeData = (og: any, so: any) => {
    for (let key in so) {
      if (typeof og[key] === 'object') {
        mergeData(og[key], so[key]);
      } else {
        og[key] = so[key];
      }
    }
    return og;
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
                  actionName={`Ingresar`}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones 
          name={`POA`}
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
  },
  optionContainerView: {
    width: '100%',
    paddingHorizontal: 20,
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

export default POAScreen;