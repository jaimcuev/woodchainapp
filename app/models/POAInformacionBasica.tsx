export default [
    {
      id: 'acreditacionPredioPrivado',
      name: 'Acreditación de predio privado',
      fields: [
        {
          id: 'acreditacionPredioPrivado',
          name: 'Acreditación de predio privado',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            columns: [
              {
                name: 'Tipo de Documento',
                id: 'acreditacionPredioPrivado_tipoDocumento',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Numero de documento',
                id: 'acreditacionPredioPrivado_numeroDocumento',
                validate: {
                  type: 'number',
                  min: 8,
                  max: 8,
                  required: true
                }
              },
              {
                name: 'Superficie',
                id: 'acreditacionPredioPrivado_superficie',
                validate: {
                  type: 'number',
                  required: true
                }
              },
            ],
          },
        },
      ],
    },
    {
      id: 'ubicacionGeografica',
      name: 'Ubicación Geografica',
      fields: [
        {
          id: 'superficieAreaIntervenir',
          name: 'Superficie del area a intervenir',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'predioPrivado',
          name: 'Predio privado',
          validate: {
            require: true
          },
          children: [
            {
              id: 'predioPrivado_departamento',
              name: 'Departamento',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'predioPrivado_provincia',
              name: 'Provincia',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'predioPrivado_distrito',
              name: 'Distrito',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'predioPrivado_sector',
              name: 'Sector',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'predioPrivado_coordenadas',
              name: 'Coordenadas',
              component: 'MyMap',
              validate: {
                required: true
              }
            },
          ],
        },
        {
          id: 'areaIntervenir',
          name: 'Area a intervenir',
          validate: {
            require: true
          },
          children: [
            {
              id: 'areaIntervenir_departamento',
              name: 'Departamento',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'areaIntervenir_provincia',
              name: 'Provincia',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'areaIntervenir_distrito',
              name: 'Distrito',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'areaIntervenir_sector',
              name: 'Sector',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              id: 'areaIntervenir_coordenadas',
              name: 'Coordenadas',
              component: 'MyMap',
              validate: {
                required: true
              }
            },
          ],
        },
      ],
    },
  ];