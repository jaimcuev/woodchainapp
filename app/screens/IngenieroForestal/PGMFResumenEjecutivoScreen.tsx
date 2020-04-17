import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import PGMFResumenEjecutivo from '../../models/PGMFResumenEjecutivo';

const PGMFResumenEjecutivoScreen = (props: any) => {
  const [steps] = useState(PGMFResumenEjecutivo);
  return (
    <Container>
      <Formv3
        formId={'PGMFResumenEjecutivo'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default PGMFResumenEjecutivoScreen;