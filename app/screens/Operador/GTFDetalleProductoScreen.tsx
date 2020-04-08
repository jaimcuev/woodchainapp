import React from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';

const GTFDetalleProductoScreen = (props: any) => {
  const steps = [
    {
      id: "detalleProducto",
      name: "Transportista",
      fields: [
        {
          id: "detalleProducto_listaTrozas",
          name: "Lista (s) de Trozas N°",
        },
        {
          id: "detalleProducto_numeroGtfOrigen",
          name: "N° GTF de origen",
        }
      ],
    },
  ];  
  const submitForm = (data: any, localData: any) => {
  };
  return (
    <Container>
      <Form 
        local={props.data || {}} 
        submitForm={submitForm} 
        steps={steps}
      />
    </Container>
  );
};

export default GTFDetalleProductoScreen;