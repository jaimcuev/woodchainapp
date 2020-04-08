import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv2 from '../../components/Formv2';
import ReporteTalaInformacion from '../../models/ReporteTalaInformacion';

const ReporteTalaInformacionScreen = (props: any) => {
  const [steps] = useState(ReporteTalaInformacion);
  return (
    <Container>
      <Formv2 
        formId={'ReporteTalaInformacion'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default ReporteTalaInformacionScreen;