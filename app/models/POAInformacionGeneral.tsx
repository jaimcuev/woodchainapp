export default [
    {
      id: 'informacionGeneral',
      name: 'Informacion General',
      fields: [
        {
          id: 'informacionGeneral_nombreTitular',
          name: 'Nombre del titular',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_numeroDocumentoIdentidad',
          name: 'Numero de documento de identidad',
          validate: {
            type: 'number',
            min: 8,
            max: 8,
            required: true
          }
        },
        {
          id: 'informacionGeneral_numeroRUC',
          name: 'Numero de RUC',
          validate: {
            type: 'number',
            min: 11,
            max: 11,
            required: true
          }
        },
        {
          id: 'informacionGeneral_domicilio',
          name: 'Domicilio',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'ingenieroForestal_numeroInrena',
          name: 'Numero de Inrena',
          validate: {
            type: 'string',
            required: true
          }
        }
      ],
    },
  ];