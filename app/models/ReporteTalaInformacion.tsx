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
          id: 'informacionGeneral_motocierra',
          name: 'Motocierrista',
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
          id: 'informacionGeneral_ayudante',
          name: 'Ayudante',
        },
        {
          id: 'informacionGeneral_fecha',
          name: 'Fecha',
        },
        {
          id: 'informacionGeneral_codigoMotocierra',
          name: 'Codigo de motocierra',
        },
        {
          id: 'informacionGeneral_combustible',
          name: 'Combustible',
        },
        {
          id: 'informacionGeneral_aceite2T',
          name: 'Aceite 2T',
        },
        {
          id: 'informacionGeneral_aceiteCadena',
          name: 'Acceite de cadena',
        },
        {
          id: 'informacionGeneral_barraCort',
          name: 'Barra de cort.',
        },
        {
          id: 'informacionGeneral_LimaCad',
          name: 'Lima de cad.',
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
            columns: [
              {
                name: 'Item',
                id: 'informacionDetallada_item',
              },
              {
                name: 'Especie',
                id: 'informacionDetallada_especie',
              },
              {
                name: 'Codigo/Placa',
                id: 'informacionDetallada_codigo',
              },
              {
                name: 'Carga',
                id: 'informacionDetallada_carga',
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
                name: 'Estado',
                id: 'informacionDetallada_estado',
              },
              {
                name: 'Observaciones',
                id: 'informacionDetallada_observaciones',
              },
            ],
          },
        },
      ]
    }
  ];