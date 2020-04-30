import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import GTFInformacionBasica from '../../models/GTFInformacionBasica';

const GTFInformacionBasicaScreen = (props: any) => {
  const [steps] = useState(GTFInformacionBasica);
  return (
    <Container>
      <Formv3
        formId={'GTFInformacionBasica'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default GTFInformacionBasicaScreen;