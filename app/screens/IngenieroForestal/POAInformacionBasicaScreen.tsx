import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv2 from '../../components/Formv2';
import POAInformacionBasica from '../../models/POAInformacionBasica';

const POAInformacionBasicaScreen = (props: any) => {
  const [steps] = useState(POAInformacionBasica);
  return (
    <Container>
      <Formv2 
        formId={'POAInformacionBasica'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAInformacionBasicaScreen;
