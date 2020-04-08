export default [
    {
      id: 'determinacionVolumenCortaAnual',
      name: 'Determinacion del volumen de corta anual',
      fields: [
        {
          id: 'determinacionVolumenCortaAnual',
          name: 'Determinacion del volumen de corta anual',
          component: 'MyTable',
          options: {
            columns: [
              {
                name: 'Especie',
                id: 'determinacionVolumenCortaAnual_especie',
                subcolumns: [
                  {
                    name: 'Nombre Comun',
                    id: 'determinacionVolumenCortaAnual_especieNombreComun',
                  },
                  {
                    name: 'Nombre Cientifico',
                    id:
                      'determinacionVolumenCortaAnual_especieNombreCientifico',
                  },
                ],
              },
              {
                name: 'DMC',
                id: 'determinacionVolumenCortaAnual_dmc',
              },
              {
                name: 'Numero de arboles',
                id: 'determinacionVolumenCortaAnual_numeroArboles',
                subcolumns: [
                  {
                    name: 'HA',
                    id: 'determinacionVolumenCortaAnual_numeroArbolesHa',
                  },
                  {
                    name: 'Total',
                    id: 'determinacionVolumenCortaAnual_numeroArbolesTotal',
                  },
                ],
              },
              {
                name: 'Volumen',
                id: 'determinacionVolumenCortaAnual_volumen',
                subcolumns: [
                  {
                    name: 'HA',
                    id: 'determinacionVolumenCortaAnual_volumenHa',
                  },
                  {
                    name: 'Total',
                    id: 'determinacionVolumenCortaAnual_volumenTotal',
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
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_corta_descripcion',
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_corta_maquinarias',
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_corta_personalRequerido',
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_corta_observaciones',
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_arrastre',
          name: 'Arrastre',
          component: 'MyTable',
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_arrastre_descripcion',
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_arrastre_maquinarias',
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_arrastre_personalRequerido',
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_arrastre_observaciones',
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_transporte',
          name: 'Transporte',
          component: 'MyTable',
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_transporte_descripcion',
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_transporte_maquinarias',
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_transporte_personalRequerido',
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_transporte_observaciones',
              },
            ],
          },
        },
        {
          id: 'sistemaAprovechamiento_otros',
          name: 'Otros',
          component: 'MyTable',
          options: {
            max_rows: 1,
            columns: [
              {
                name: 'Descripcion',
                id: 'sistemaAprovechamiento_otros_descripcion',
              },
              {
                name: 'Maquinarias',
                id: 'sistemaAprovechamiento_otros_maquinarias',
              },
              {
                name: 'Personal requerido',
                id: 'sistemaAprovechamiento_otros_personalRequerido',
              },
              {
                name: 'Observaciones',
                id: 'sistemaAprovechamiento_otros_observaciones',
              },
            ],
          },
        },
      ],
    },
  ];