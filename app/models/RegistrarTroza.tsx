export default [
  {
    id: 'informacionGeneral',
    name: 'Informacion General',
    fields: [
      {
        id: 'informacionGeneral_arbolId',
        name: 'arbolId',
        validate: {
          required: true
        }
      },
      {
        id: 'informacionGeneral_volumen',
        name: 'Volumen',
        validate: {
          required: true
        }
      },
      {
        id: 'informacionGeneral_diametro',
        name: 'diametro',
        validate: {
          required: true
        }
      },
      {
        id: 'informacionGeneral_largo',
        name: 'largo',
        validate: {
          required: true
        }
      },
    ],
  },
];