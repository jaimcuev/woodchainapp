import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv2 from '../../components/Formv2';
import POAPlanAprovechamiento from '../../models/POAPlanAprovechamiento';

const POAPlanAprovechamientoScreen = (props: any) => {
  const [steps] = useState(POAPlanAprovechamiento);
  return (
    <Container>
      <Formv2 
        formId={'POAPlanAprovechamiento'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAPlanAprovechamientoScreen;