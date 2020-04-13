import React from 'react';
import { View, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import Option from '../../components/Option';
import Title from '../../components/Title';
import { NavigateTo } from '../../services/HelpfulFunctions';
import { connect } from 'react-redux';
import { setActividad, destroyActividad } from '../../actions/actividad.actions';
import { destroyAnexo, setAnexo } from '../../actions/anexo.actions';

const IFHomeScreen = (props: any) => {
  const passEmpresa = (empresaId: string) => {
    props.storeAnexo({ id: empresaId });
  };
  const onPressPOA = () => {
    if (!props.isActivePOA) props.iniciarPOA();
    NavigateTo(props.componentId, 'POAScreen', 'Plan operativo anual (POA)');
  };
  const onPressRegistrarArbol = () => {
    if (props.isActivePOA) {
      NavigateTo(props.componentId, 'RegistrarArbolScreen', 'Registrar arbol');
    }
  };
  const onPressRegistrarEmpresaTaladora = () => {
    NavigateTo(
      props.componentId,
      'RegistrarEmpresaTaladoraScreen',
      'Registrar Empresa Taladora', {
      passEmpresa: passEmpresa
    }
    );
  };
  const onPressEliminarEmpresaTaladora = (number: number) => {
    props.eliminarAnexo();
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.optionsView}>
        <Title title="Actividades" />
        <View style={styles.optionItemsView}>
          <Option
            number={1}
            title={'Plan Operativo Anual'}
            subtitle={'Subtitulo de la accion'}
            actionDisabled={!props.empresa}
            onPress={onPressPOA}
            actionName={'Iniciar'}
          />
        </View>
        <Title title="Accesos Directos" />
        <View style={styles.optionItemsView}>
          <Option
            number={1}
            actionDisabled={false}
            title={'Anexar Empresa Taladora'}
            onPress={onPressRegistrarEmpresaTaladora}
            subtitle={'Subtitulo de la accion'}
            actionName={props.empresa ? 'Modificar' : 'Ingresar'}
            customAction={props.empresa && {
              name: 'Eliminar',
              onPress: onPressEliminarEmpresaTaladora,
            }}
          />
          <Option
            number={2}
            actionDisabled={!props.isActivePOA}
            title={'Registrar Arbol'}
            onPress={onPressRegistrarArbol}
            subtitle={'Subtitulo de la accion'}
            actionName={'Ingresar'}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
  },
  optionItemsView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  optionsView: {
    flex: 1,
    flexDirection: 'column',
    borderLeftColor: '#ededed',
    borderLeftWidth: 1,
  },
});

const mapStateToProps = (state: any) => {
  return {
    empresa: state.anexo.data.id,
    isActivePOA: state.actividad.nombre,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    iniciarPOA: () => {
      dispatch(setActividad('POA'));
    },
    eliminarAnexo: () => {
      dispatch(destroyAnexo());
      dispatch(destroyActividad());
    },
    storeAnexo: (data: any) => {
      dispatch(setAnexo(data))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IFHomeScreen);
