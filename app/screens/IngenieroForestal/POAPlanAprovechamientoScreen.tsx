import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import POAPlanAprovechamiento from '../../models/POAPlanAprovechamiento';

const POAPlanAprovechamientoScreen = (props: any) => {
  const [steps] = useState(POAPlanAprovechamiento);
  return (
    <Container>
      <Formv3
        formId={'POAPlanAprovechamiento'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAPlanAprovechamientoScreen;