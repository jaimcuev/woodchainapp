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
          id: 'informacionGeneral_operaddor',
          name: 'Operador',
          validate: {
            type: 'string',
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
          id: 'informacionGeneral_ayudante',
          name: 'Ayudante',
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: 'informacionGeneral_aceite1',
          name: 'Aceite 1',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_aceite2',
          name: 'Aceite 2',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_aceite3',
          name: 'Aceite 3',
          validate: {
            required: true
          }
        },
        {
          id: 'informacionGeneral_turno',
          name: 'Turno',
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
          id: 'informacionGeneral_petroleo',
          name: 'Petroleo',
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
            columns: [
              {
                name: 'Especie',
                id: 'informacionDetallada_especie',
                readonly: true,
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Codigo/Arbol',
                id: 'informacionDetallada_codigo',
                readonly: true,
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Carga',
                id: 'informacionDetallada_carga',
                validate: {
                  type: 'string',
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
                name: 'VOL m3',
                id: 'informacionDetallada_VOLm',
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
      ]
    }
  ];
