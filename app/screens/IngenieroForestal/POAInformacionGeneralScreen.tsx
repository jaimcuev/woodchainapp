import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv2 from '../../components/Formv2';
import POAInformacionGeneral from '../../models/POAInformacionGeneral';

const POAInformacionGeneralScreen = (props: any) => {
  const [steps] = useState(POAInformacionGeneral);
  return (
    <Container>
      <Formv2 
        formId={'POAInformacionGeneral'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAInformacionGeneralScreen;