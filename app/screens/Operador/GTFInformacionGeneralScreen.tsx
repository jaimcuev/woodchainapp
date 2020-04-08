import React from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';

const GTFInformacionGeneralScreen = (props: any) => {
  const steps = [
    {
      id: "informacionGeneral",
      name: "Informacion General",
      fields: [
        {
          id: "informacionGeneral_numeroTalonario",
          name: "Número de Talonario",
        },
        {
          id: "informacionGeneral_autoridadRegionalForestalFaunaSilvestre",
          name: "Autoridad Regional Forestal y de Fauna Silvestre",
        },
        {
          id: "informacionGeneral_fechaExpedicion",
          name: "Fecha de Expedición",
        },
        {
          id: "informacionGeneral_fechaVencimiento",
          name: "Fecha de vencimiento",
        },
        {
          id: "informacionGeneral_origenRecurso",
          name: "Origen del Recurso",
        },
        {
          id: "informacionGeneral_numeroTituloHabilitante",
          name: "Número de Titulo Habilitante",
        },
        {
          id: "informacionGeneral_nombreCompletoTitular",
          name: "Nombre completo del Titular",
        },
        {
          id: "informacionGeneral_representanteLegal",
          name: "Representante legal",
        },
        {
          id: "informacionGeneral_numeroResolucion",
          name: "Número de Resolución",
        },
        {
          id: "informacionGeneral_planManejoTipo",
          name: "Plan de Manejo (Tipo)",
        },
        {
          id: "informacionGeneral_departamento",
          name: "Departamento",
        },
        {
          id: "informacionGeneral_provincia",
          name: "Provincia",
        },
        {
          id: "informacionGeneral_distrito",
          name: "Distrito",
        },
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

export default GTFInformacionGeneralScreen;