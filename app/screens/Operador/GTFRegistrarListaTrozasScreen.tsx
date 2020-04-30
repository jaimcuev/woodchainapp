import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import GTFRegistrarListaTrozas from '../../models/GTFRegistrarListaTrozas';

const GTFRegistrarListaTrozasScreen = (props: any) => {
  const [steps] = useState(GTFRegistrarListaTrozas);
  return (
    <Container>
      <Formv3
        formId={'GTFRegistrarListaTrozas'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default GTFRegistrarListaTrozasScreen;