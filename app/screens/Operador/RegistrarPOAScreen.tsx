import React from 'react';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { findByParentUsuario } from '../../services/POAService';
import { registrarPOA } from '../../services/OService';

const ReportePatioScreen = (props: any) => {
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
    const myPoaId = localData.registrarPOA_codigoPOA.value;
    if( myPoaId ) {
      const parentUsuario = props.usuario.parentUsuario;
      findByParentUsuario(myPoaId, parentUsuario).then( (result: any) => {
        if( result.data.poaId ) {
          registrarPOA( result.data.poaId ).then( status => {
            if( status ) {
              Navigation.popToRoot(props.componentId);
            }
          } );
        }
      } );
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