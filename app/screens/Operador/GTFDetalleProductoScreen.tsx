import React, { useState } from 'react';
import Container from '../../components/Container';
import Formv3 from '../../components/Formv3';
import GTFDetalleProducto from '../../models/GTFDetalleProducto';

const GTFDetalleProductoScreen = (props: any) => {
  const [steps] = useState(GTFDetalleProducto);
  return (
    <Container>
      <Formv3
        formId={'GTFDetalleProducto'}
        steps={steps}
        componentId={props.componentId}
      />
    </Container>
  );
};

export default GTFDetalleProductoScreen;