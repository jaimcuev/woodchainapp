export default [
    {
      id: 'resumenEjecutivo',
      name: 'Resumen Ejecutivo',
      fields: [
        {
          id: 'delTitularContrato',
          name: 'Del Titular del Contrato',
          validate: {
            require: true
          },
          children: [
            {
              id: 'resumenEjecutivo_delTitularContrato_nombreTitular',
              name: 'Nombre del Titular',
            },
            {
              id: 'resumenEjecutivo_delTitularContrato_nombreRepresentanteLegal',
              name: 'Nombre del Representante Legal',
            },
          ]
        },
        {
          id: 'delPGMF',
          name: 'Del Plan General de Manejo Forestal',
          validate: {
            require: true
          },
          children: [
            {
              id: 'resumenEjecutivo_delPGMF_ingForestalPgmf',
              name: 'Ing. Forestal que elaboró el PGMF',
            },
            {
              id: 'resumenEjecutivo_delPGMF_certificadoHabilitacionIngForestal',
              name: 'Certificado de habilitación del Ing. Forestal',
            },
            {
              id: 'resumenEjecutivo_delPGMF_numeroInscripcionRegistroConsultoresForestales',
              name: 'N° de inscripción en el registro de consultores forestales',
            },
            {
              id: 'resumenEjecutivo_delPGMF_fechaPresentacion',
              name: 'Fecha de presentación del PGMF (actualización)',
            },
            {
              id: 'resumenEjecutivo_delPGMF_fechaInicioDuracion',
              name: 'Fecha de inicio',
            },
            {
              id: 'resumenEjecutivo_delPGMF_fechaFinalizacionDuracion',
              name: 'Fecha de finalización',
            },
            {
              id: 'resumenEjecutivo_delPGMF_objetivosEspecificos',
              name: 'Objetivos Especificos',
              component: 'MyTable',
              validate: {
                require: true
              },
              options: {
                columns: [
                  {
                    name: 'Descripción',
                    id: 'resumenEjecutivo_delPGMF_objetivosEspecificos_descripcion',
                    validate: {
                      required: true
                    }
                  },
                ],
              },
            },
            {
              id: 'resumenEjecutivo_delPGMF_numeroBloquesQuinquenales',
              name: 'N° de bloques Quinquenales',
            },
            {
              id: 'resumenEjecutivo_delPGMF_potencialMaderableConcesion',
              name: 'Potencial maderable concesión (m3totales)',
            },
          ]
        },
        {
          id: 'delContrato',
          name: 'Del Contrato',
          validate: {
            require: true
          },
          children: [
            {
              id: 'resumenEjecutivo_delContrato_nroContratoConcesion',
              name: 'Nro. Contrato Cencesión',
              component: 'MyTable',
              validate: {
                require: true
              },
              options: {
                columns: [
                  {
                    name: 'Numero',
                    id: 'resumenEjecutivo_delContrato_nroContratoConcesion_numero',
                    validate: {
                      required: true
                    }
                  },
                ],
              },
            },
            {
              id: 'resumenEjecutivo_delContrato_departamento',
              name: 'Departamento',
            },
            {
              id: 'resumenEjecutivo_delContrato_provincia',
              name: 'Provincia',
            },
            {
              id: 'resumenEjecutivo_delContrato_areaTotalConcesionConsolidado',
              name: 'Área total de la Concesión / Consolidado (Ha)',
            },
            {
              id: 'resumenEjecutivo_delContrato_areaBosqueProduccionForestalTotal',
              name: 'Área del bosque de producción forestal Total (Ha)',
            },
          ]
        },
      ],
    },
  ];