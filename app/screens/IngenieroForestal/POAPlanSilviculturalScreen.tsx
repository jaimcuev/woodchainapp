import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv2 from '../../components/Formv2';
import POAPlanSilvicultural from '../../models/POAPlanSilvicultural';

const POAPlanSilviculturalScreen = (props: any) => {
  const [steps] = useState(POAPlanSilvicultural);
  return (
    <Container>
      <Formv2 
        formId={'POAPlanSilvicultural'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default POAPlanSilviculturalScreen;