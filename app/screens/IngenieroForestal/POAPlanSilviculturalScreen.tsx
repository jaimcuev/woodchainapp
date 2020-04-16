import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import POAPlanSilvicultural from '../../models/POAPlanSilvicultural';

const POAPlanSilviculturalScreen = (props: any) => {
  const [steps] = useState(POAPlanSilvicultural);
  return (
    <Container>
      <Formv3
        formId={'POAPlanSilvicultural'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAPlanSilviculturalScreen;