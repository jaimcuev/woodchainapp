export default [
    {
      id: 'determinacionVolumenCortaAnual',
      name: 'Determinacion del volumen de corta anual',
      fields: [
        {
          id: 'determinacionVolumenCortaAnual',
          name: 'Determinacion del volumen de corta anual',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            columns: [
              {
                name: 'Especie',
                id: 'determinacionVolumenCortaAnual_especie',
                validate: {
                  require: true
                },
                subcolumns: [
                  {
                    name: 'Nombre Comun',
                    id: 'determinacionVolumenCortaAnual_especieNombreComun',
                    validate: {
                      type: 'string',
                      required: true
                    }
                  },
                  {
                    name: 'Nombre Cientifico',
                    id:
                      'determinacionVolumenCortaAnual_especieNombreCientifico',
                      validate: {
                        type: 'string',
                        required: true
                      }
                  },
                ],
              },
              {
                name: 'DMC',
                id: 'determinacionVolumenCortaAnual_dmc',
                validate: {
                  type: 'number',
                  required: true
                }
              },
              {
                name: 'Numero de arboles',
                id: 'determinacionVolumenCortaAnual_numeroArboles',
                validate: {
                  require: true
                },
                subcolumns: [
                  {
                    name: 'HA',
                    id: 'determinacionVolumenCortaAnual_numeroArbolesHa',
                    validate: {
                      type: 'number',
                      required: true
                    }
                  },
                  {
                    name: 'Total',
                    id: 'determinacionVolumenCortaAnual_numeroArbolesTotal',
                    validate: {
                      type: 'number',
                      required: true
                    }
                  },
                ],
              },
              {
                name: 'Volumen',
                id: 'determinacionVolumenCortaAnual_volumen',
                validate: {
                  require: true
                },
                subcolumns: [
                  {
                    name: 'HA',
                    id: 'determinacionVolumenCortaAnual_volumenHa',
                    validate: {
                      type: 'number',
                      required: true
                    }
                  },
                  {
                    name: 'Total',
                    id: 'determinacionVolumenCortaAnual_volumenTotal',
                    validate: {
                      type: 'number',
                      required: true
                    }
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      id: 'sistemaAprovechamiento',
      name: 'Sistema de aprovechamiento (Actividades)',
      fields: [
        {
          id: 'sistemaAprovechamiento_corta',
          name: 'Corta',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_corta_descripcion',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_corta_maquinarias',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_corta_personalRequerido',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_corta_observaciones',
                validate: {
                  type: 'string',
                  required: true
                }
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_arrastre',
          name: 'Arrastre',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_arrastre_descripcion',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_arrastre_maquinarias',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_arrastre_personalRequerido',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_arrastre_observaciones',
                validate: {
                  type: 'string',
                  required: true
                }
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_transporte',
          name: 'Transporte',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_transporte_descripcion',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_transporte_maquinarias',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_transporte_personalRequerido',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_transporte_observaciones',
                validate: {
                  type: 'string',
                  required: true
                }
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_otros',
          name: 'Otros',
          component: 'MyTable',
          validate: {
            require: true
          },
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_otros_descripcion',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_otros_maquinarias',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_otros_personalRequerido',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_otros_observaciones',
                validate: {
                  type: 'string',
                  required: true
                }
              },
            ],
          },
        },
      ],
    },
  ];