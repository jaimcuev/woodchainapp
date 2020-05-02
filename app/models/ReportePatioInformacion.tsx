export default [
    {
      id: 'informacionGeneral',
      name: 'Informacion General',
      fields: [
        {
          id: 'informacionGeneral_nombreConcesion',
          name: 'Nombre de la concesion o titular',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_numeroPCA',
          name: 'Número PCA',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'informacionGeneral_numeroZafra',
          name: 'Numero Zafra',
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: 'informacionGeneral_cubicador',
          name: 'Cubicador',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_supervisor',
          name: 'Supervisor',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_motosierrista',
          name: 'Motosierrista',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_codigoMotosierra',
          name: 'Codigo de motosierra',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_codigoMaquina',
          name: 'Codigo de maquina',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_ayudante1',
          name: 'Ayudante 1',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_ayudante2',
          name: 'Ayudante 2',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_horometroInicio',
          name: 'Horometro Inicio',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_horometroFinal',
          name: 'Horometro Final',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_combustible',
          name: 'Combustible',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_aceite',
          name: 'Aceite',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_otros',
          name: 'Otros',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_tipoExtraccion',
          name: 'Tipo de extracción',
          validate: {
            required: true
          }
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
          validate: {
            required: true
          },
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Codigo/Carga',
                id: 'informacionDetallada_codigo',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'Num. Sección',
                id: 'informacionDetallada_numSeccion',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'Correlativo Troza',
                id: 'informacionDetallada_correlativoTroza',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'Especie',
                id: 'informacionDetallada_especie',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'DIAM > cm',
                id: 'informacionDetallada_diamMayorCm',
                validate: {
                  type: 'number',
                  required: true
                }
              },
              {
                name: 'DIAM < cm',
                id: 'informacionDetallada_diamMenorCm',
                validate: {
                  type: 'number',
                  required: true
                }
              },
              {
                name: 'LAR m',
                id: 'informacionDetallada_LARm',
                validate: {
                  type: 'number',
                  required: true
                }
              },
              {
                name: 'Patio',
                id: 'informacionDetallada_patio',
                validate: {
                  required: true
                }
              },
              {
                name: 'Observaciones',
                id: 'informacionDetallada_observaciones',
                validate: {
                  required: true
                }
              },
            ],
          },
        },
        {
          id: 'informacionDetallada_observacionesGenerales',
          name: 'Observaciones Generales',
          validate: {
            required: true
          }
        },
      ]
    }
  ];