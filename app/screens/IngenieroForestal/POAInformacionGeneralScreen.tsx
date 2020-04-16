import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import POAInformacionGeneral from '../../models/POAInformacionGeneral';

const POAInformacionGeneralScreen = (props: any) => {
  const [steps] = useState(POAInformacionGeneral);
  return (
    <Container>
      <Formv3
        formId={'POAInformacionGeneral'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAInformacionGeneralScreen;