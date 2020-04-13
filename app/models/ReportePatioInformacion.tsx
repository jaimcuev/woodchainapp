export default [
    {
      id: 'informacionGeneral',
      name: 'Informacion General',
      fields: [
        {
          id: 'informacionGeneral_nombreConcesion',
          name: 'Nombre de la concesion o titular',
        },
        {
          id: 'informacionGeneral_numeroPCA',
          name: 'Número PCA',
        },
        {
          id: 'informacionGeneral_numeroZafra',
          name: 'Numero Zafra',
        },
        {
          id: 'informacionGeneral_cubicador',
          name: 'Cubicador',
        },
        {
          id: 'informacionGeneral_supervisor',
          name: 'Supervisor',
        },
        {
          id: 'informacionGeneral_motosierrista',
          name: 'Motosierrista',
        },
        {
          id: 'informacionGeneral_codigoMotosierra',
          name: 'Codigo de motosierra',
        },
        {
          id: 'informacionGeneral_codigoMaquina',
          name: 'Codigo de maquina',
        },
        {
          id: 'informacionGeneral_ayudante1',
          name: 'Ayudante 1',
        },
        {
          id: 'informacionGeneral_ayudante2',
          name: 'Ayudante 2',
        },
        {
          id: 'informacionGeneral_horometroInicio',
          name: 'Horometro Inicio',
        },
        {
          id: 'informacionGeneral_horometroFinal',
          name: 'Horometro Final',
        },
        {
          id: 'informacionGeneral_combustible',
          name: 'Combustible',
        },
        {
          id: 'informacionGeneral_aceite',
          name: 'Aceite',
        },
        {
          id: 'informacionGeneral_otros',
          name: 'Otros',
        },
        {
          id: 'informacionGeneral_tipoExtraccion',
          name: 'Tipo de extracción',
        }
      ],
    },
    {
      id: 'informacionDetallada',
      name: 'Información Detallada',
      fields: [
        {
          id: 'informacionDetallada',
          name: 'Información detallada',
          component: 'MyTable',
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Codigo/Carga',
                id: 'informacionDetallada_codigo',
              },
              {
                name: 'Num. Sección',
                id: 'informacionDetallada_numSeccion',
              },
              {
                name: 'Correlativo Troza',
                id: 'informacionDetallada_correlativoTroza',
              },
              {
                name: 'Especie',
                id: 'informacionDetallada_especie',
              },
              {
                name: 'DIAM > cm',
                id: 'informacionDetallada_diamMayorCm',
              },
              {
                name: 'DIAM < cm',
                id: 'informacionDetallada_diamMenorCm',
              },
              {
                name: 'LAR m',
                id: 'informacionDetallada_LARm',
              },
              {
                name: 'Patio',
                id: 'informacionDetallada_patio',
              },
              {
                name: 'Observaciones',
                id: 'informacionDetallada_observaciones',
              },
            ],
          },
        },
        {
          id: 'informacionDetallada_observacionesGenerales',
          name: 'Observaciones Generales',
        },
      ]
    }
  ];