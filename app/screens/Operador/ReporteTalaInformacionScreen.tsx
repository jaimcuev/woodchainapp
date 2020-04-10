import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import ReporteTalaInformacion from '../../models/ReporteTalaInformacion';

const ReporteTalaInformacionScreen = (props: any) => {
  const [steps] = useState(ReporteTalaInformacion);
  return (
    <Container>
      <Formv3 
        formId={'ReporteTalaInformacion'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default ReporteTalaInformacionScreen;