import React, { useCallback } from 'react';
import { Navigation } from 'react-native-navigation';
import { connect, useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { findByParentUsuario } from '../../services/POAService';
import { error, success, loading } from '../../actions/alerta.actions';

const ReportePatioScreen = (props: any) => {
  const dispatch = useDispatch();
  const errorAlerta = useCallback(
    (message: string) => dispatch(error(message)),
    [dispatch],
  );
  const successAlerta = useCallback(
    (message: string, haveClose: boolean, options: any) => dispatch(success(message, haveClose, options)),
    [dispatch],
  );
  const loadingAlerta = useCallback(
    (message: string) => dispatch(loading(message)),
    [dispatch],
  );

  const steps = [
    {
      id: 'registrarPOA',
      name: 'Registrar POA',
      fields: [
        {
          id: 'registrarPOA_codigoPOA',
          name: 'Codigo del POA',
        },
      ],
    },
  ];
  const submitForm = (data: any, localData: any) => {
    const myPoaId = localData?.registrarPOA_codigoPOA?.value;
    if( myPoaId ) {
      loadingAlerta('Evaluando transacción en la red.');
      const parentUsuario = props.usuario.parentUsuario;
      findByParentUsuario(myPoaId, parentUsuario).then( (result: any) => {
        if( result.data.poaId ) {
          props.passPOA( result.data.poaId );
          successAlerta( 'POA anexado correctamente.', false, [
            {
              name: 'Volver al inicio',
              onPress: () => {
                Navigation.popToRoot(props.componentId);
              }
            }
          ] );
        } else {
          errorAlerta('Error al anexar el POA. Asegurate de que este pertenesca a la organización y se encuentre aprobado para continuar.');
        }
      } );
    } else {
      errorAlerta('Error, el codigo del POA es requerido');
    }
  };
  return (
    <Container>
      <Form 
        local={props.data || {}} 
        submitForm={submitForm} 
        steps={steps}
      />
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    usuario: state.usuario.data
  }
}

export default connect(mapStateToProps)(ReportePatioScreen);