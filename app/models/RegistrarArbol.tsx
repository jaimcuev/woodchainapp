export default [
    {
      id: 'informacionGeneral',
      name: 'Informacion General',
      fields: [
        {
          id: 'informacionGeneral_especie',
          name: 'Especie',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_minimoTrozas',
          name: 'Minimo de trozas',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'informacionGeneral_maximoTrozas',
          name: 'Maximo de trozas',
          validate: {
            type: 'number',
            required: true
          }
        },
      ],
    },
    {
      id: 'dimensiones',
      name: 'Dimensiones',
      fields: [
        {
          id: 'dimensiones_diametroCM',
          name: 'Diametro (CM)',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'dimensiones_diametroPulgadas',
          name: 'Diametro (Pulgadas)',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'dimensiones_largo',
          name: 'Largo (Pies)',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'dimensiones_volumen',
          name: 'Volumen (m3)',
          validate: {
            type: 'number',
            required: true
          }
        },
      ],
    },
  ];