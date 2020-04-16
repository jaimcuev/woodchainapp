import React, { useState } from 'react';
import Container from '../../components/Container';
import POAInformacionBasica from '../../models/POAInformacionBasica';
import Formv3 from '../../components/Formv3';

const POAInformacionBasicaScreen = (props: any) => {
  const [steps] = useState(POAInformacionBasica);
  return (
    <Container>
      <Formv3
        formId={'POAInformacionBasica'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAInformacionBasicaScreen;
