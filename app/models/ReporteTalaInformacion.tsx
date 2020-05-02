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
          id: 'informacionGeneral_motocierra',
          name: 'Motocierrista',
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
          id: 'informacionGeneral_ayudante',
          name: 'Ayudante',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_codigoMotocierra',
          name: 'Codigo de motocierra',
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
          id: 'informacionGeneral_aceite2T',
          name: 'Aceite 2T',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_aceiteCadena',
          name: 'Acceite de cadena',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_barraCort',
          name: 'Barra de cort.',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_LimaCad',
          name: 'Lima de cad.',
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
                name: 'Especie',
                id: 'informacionDetallada_especie',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'Codigo/Placa',
                id: 'informacionDetallada_codigo',
                readonly: true,
                validate: {
                  required: true
                }
              },
              {
                name: 'Carga',
                id: 'informacionDetallada_carga',
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
                name: 'Estado',
                id: 'informacionDetallada_estado',
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
      ]
    }
  ];