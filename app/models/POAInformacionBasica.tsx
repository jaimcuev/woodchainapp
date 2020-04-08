export default [
    {
      id: 'acreditacionPredioPrivado',
      name: 'Acreditación de predio privado',
      fields: [
        {
          id: 'acreditacionPredioPrivado',
          name: 'Acreditación de predio privado',
          component: 'MyTable',
          options: {
            columns: [
              {
                name: 'Tipo de Documento',
                id: 'acreditacionPredioPrivado_tipoDocumento',
              },
              {
                name: 'Numero de documento',
                id: 'acreditacionPredioPrivado_numeroDocumento',
              },
              {
                name: 'Superficie',
                id: 'acreditacionPredioPrivado_superficie',
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
        },
        {
          id: 'predioPrivado',
          name: 'Predio privado',
          children: [
            {
              id: 'predioPrivado_departamento',
              name: 'Departamento',
            },
            {
              id: 'predioPrivado_provincia',
              name: 'Provincia',
            },
            {
              id: 'predioPrivado_distrito',
              name: 'Distrito',
            },
            {
              id: 'predioPrivado_sector',
              name: 'Sector',
            },
            {
              id: 'predioPrivado_coordenadas',
              name: 'Coordenadas',
              component: 'MyMap',
            },
          ],
        },
        {
          id: 'areaIntervenir',
          name: 'Area a intervenir',
          children: [
            {
              id: 'areaIntervenir_departamento',
              name: 'Departamento',
            },
            {
              id: 'areaIntervenir_provincia',
              name: 'Provincia',
            },
            {
              id: 'areaIntervenir_distrito',
              name: 'Distrito',
            },
            {
              id: 'areaIntervenir_sector',
              name: 'Sector',
            },
            {
              id: 'areaIntervenir_coordenadas',
              name: 'Coordenadas',
              component: 'MyMap',
            },
          ],
        },
      ],
    },
  ];