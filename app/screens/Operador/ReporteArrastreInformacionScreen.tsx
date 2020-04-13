import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import ReporteArrastreInformacion from '../../models/ReporteArrastreInformacion';

const ReporteArrastreInformacionScreen = (props: any) => {
  const [steps] = useState(ReporteArrastreInformacion);
  return (
    <Container>
      <Formv3
        formId={'ReporteArrastreInformacion'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default ReporteArrastreInformacionScreen;