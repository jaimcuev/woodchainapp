import React from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';

const GTFTransportistaScreen = (props: any) => {
  const steps = [
    {
      id: "transportista",
      name: "Transportista",
      fields: [
        {
          id: "transportista_guiaRemision",
          name: "N° Guía de Remisión",
        },
        {
          id: "transportista_tipoTransporte",
          name: "Tipo de transporte",
        },
        {
          id: "transportista_tipoVehiculo",
          name: "Tipo de vehículo",
        },
        {
          id: "transportista_placaVehiculo",
          name: "Placa (s) N°",
        },
        {
          id: "transportista_conductor",
          name: "Conductor",
        },
        {
          id: "transportista_dniConductor",
          name: "DNI N° Conductor",
        },
        {
          id: "transportista_licenciaConducirConductor",
          name: "Licencia de conducir N°",
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

export default GTFTransportistaScreen;