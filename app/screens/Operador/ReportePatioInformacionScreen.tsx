import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import { registrarLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';
import ReportePatioInformacion from '../../models/ReportePatioInformacion';

const ReportePatioInformacionScreen = (props: any) => {
  const [steps] = useState(ReportePatioInformacion);
  const submitForm = (data: any, localData: any) => {
    registrarLocalReporte('ReportePatioInformacion', data, localData)
    .then( status => {
      Navigation.pop(props.componentId);
    } );
  };
  return (
    <Container>
      <Formv3
        formId={'ReportePatioInformacion'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default ReportePatioInformacionScreen;