import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import Option from '../../components/Option';
import Title from '../../components/Title';
import { NavigateTo } from '../../services/HelpfulFunctions';
import { setAnexo } from '../../actions/anexo.actions';
import { setActividad, destroyActividad } from '../../actions/actividad.actions';
import options from '../../models/OperadorReportes';

const OHomeScreen = (props: any) => {
  const dispatch = useDispatch();
  const poaId = useSelector((state: any) => state.anexo.data.id);
  const reporteActivo = useSelector((state: any) => state.actividad.nombre);
  const storeAnexo = useCallback(
    (data: any) => dispatch(setAnexo(data)),
    [dispatch],
  );
  const storeActividad = useCallback(
    (data: string) => dispatch(setActividad(data)),
    [dispatch],
  );
  const deleteActividad = useCallback(
    () => dispatch(destroyActividad()),
    [dispatch],
  );
  const passPOA = (_poaId: string) => {
    storeAnexo({ id: _poaId });
  };
  const onPressReporte = (id: string, screen: string, title: string) => {
    if( !reporteActivo ) storeActividad(id);
    NavigateTo(props.componentId, screen, title, { 
      poaId: poaId,
      deleteActividad: deleteActividad
    });
  }
  const onPressRegistrarPOA = () => {
    NavigateTo(props.componentId, 'RegistrarPOAScreen', 'Registrar POA', {
      passPOA: passPOA
    });
  };
  return (
    <Container style={styles.containerView}>
      <View style={styles.optionsView}>
        <Title title="Reportes" />
        <View style={styles.optionItemsView}>
          {options.map((option: any, index) => {
            return (
              <Option
                key={option.number}
                number={option.number}
                title={option.title}
                onPress={() => onPressReporte(option.id, option.screen, option.title)}
                subtitle={option.subtitle}
                actionDisabled={ (poaId === "" || reporteActivo !== option.id) && reporteActivo !== "" }
                actionName={reporteActivo === option.id ? 'Continuar' : 'Iniciar'}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.badgesView}>
        <Title title="Accesos Directos" />
        <View style={styles.optionItemsView}>
          <Option
            number={1}
            title={'Registrar POA'}
            subtitle={'Subtitulo de la accion'}
            onPress={onPressRegistrarPOA}
            actionName={ !poaId ? 'Ingresar' : 'Modificar' }
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
  badgesView: {
    width: '35%',
    flexDirection: 'column'
  },
  optionItemsView: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  optionsView: {
    flex: 1,
    flexDirection: 'column',
    borderRightColor: '#ededed',
    borderRightWidth: 1,
  },
});

export default OHomeScreen;
