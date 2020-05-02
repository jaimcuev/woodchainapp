export default [
    {
      id: "informacionGeneral",
      name: "Informacion General",
      fields: [
        {
          id: "informacionGeneral_numeroTalonario",
          name: "Número de Talonario",
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: "informacionGeneral_autoridadRegionalForestalFaunaSilvestre",
          name: "Autoridad Regional Forestal y de Fauna Silvestre",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_fechaExpedicion",
          name: "Fecha de Expedición",
          validate: {
            required: true
          }
        },
        {
          id: "informacionGeneral_fechaVencimiento",
          name: "Fecha de vencimiento",
          validate: {
            required: true
          }
        },
        {
          id: "informacionGeneral_origenRecurso",
          name: "Origen del Recurso",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_numeroTituloHabilitante",
          name: "Número de Titulo Habilitante",
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: "informacionGeneral_nombreCompletoTitular",
          name: "Nombre completo del Titular",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_representanteLegal",
          name: "Representante legal",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_numeroResolucion",
          name: "Número de Resolución",
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: "informacionGeneral_planManejoTipo",
          name: "Plan de Manejo (Tipo)",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_departamento",
          name: "Departamento",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_provincia",
          name: "Provincia",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionGeneral_distrito",
          name: "Distrito",
          validate: {
            type: 'string',
            required: true
          }
        },
      ],
    },
  ];