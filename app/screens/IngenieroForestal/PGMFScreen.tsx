import React, { useCallback } from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Title from '../../components/Title';
import ActividadAcciones from '../../components/ActividadAcciones';
import options from '../../models/PGMF';
import { NavigateTo } from '../../services/HelpfulFunctions';
import Option from '../../components/Option';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage, success, error } from '../../actions/alerta.actions';
import { createPGMF } from '../../services/PGMFService';
import { Navigation } from 'react-native-navigation';

const PGMFScreen = (props: any) => {
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

  const onPressEnviar = (anexo: string, data: any) => {
    if( data && data.documento && anexo ) {
      let dataSubmit = data;
      if ( empresa ) {
        const usuarioId = usuario.id;
          if ( usuarioId ) {
            dataSubmit['usuarioId'] = usuarioId;
            dataSubmit['parentUsuario'] = empresa;
            createPGMF(dataSubmit).then(resultado => {
              if (resultado.status) {
                props.deleteActividad();
                Navigation.popToRoot(props.componentId);
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

  return (
    <Container style={styles.containerView}>
      <View style={styles.contentView}>
        <Title title="Información requerida" />
        <View style={styles.optionItemsView}>
          { options.map((option: any, index) => {
            return (
              <View key={option.number} style={[styles.optionContainerView]}>
                <Option
                  number={option.number}
                  title={option.title}
                  onPress={() =>
                    NavigateTo(props.componentId, option.screen, option.title)
                  }
                  subtitle={option.subtitle}
                  actionName={`Ingresar`}
                />
              </View>
            );
          }) }
        </View>
      </View>
      <View style={styles.sidebarView}>
        <Title title="Acciones" />
        <ActividadAcciones 
          name={`PGMF`}
          componentId={props.componentId}
          deleteActividad={props.deleteActividad}
          onPressEnviar={onPressEnviar}
          excludeEstructurar={['documento']}
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
    width: '100%'
  },
});

export default PGMFScreen;
