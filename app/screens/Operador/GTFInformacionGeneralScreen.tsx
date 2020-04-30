import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import GTFInformacionGeneral from '../../models/GTFInformacionGeneral';

const GTFInformacionGeneralScreen = (props: any) => {
  const [steps] = useState(GTFInformacionGeneral);
  return (
    <Container>
      <Formv3
        formId={'GTFInformacionGeneral'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default GTFInformacionGeneralScreen;