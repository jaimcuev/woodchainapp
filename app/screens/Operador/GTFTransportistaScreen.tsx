import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import GTFTransportista from '../../models/GTFTransportista';

const GTFTransportistaScreen = (props: any) => {
  const [steps] = useState(GTFTransportista);
  return (
    <Container>
      <Formv3
        formId={'GTFTransportista'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default GTFTransportistaScreen;