export default [
    {
      id: "transportista",
      name: "Transportista",
      fields: [
        {
          id: "transportista_guiaRemision",
          name: "N° Guía de Remisión",
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: "transportista_tipoTransporte",
          name: "Tipo de transporte",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "transportista_tipoVehiculo",
          name: "Tipo de vehículo",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "transportista_placaVehiculo",
          name: "Placa (s) N°",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "transportista_conductor",
          name: "Conductor",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "transportista_dniConductor",
          name: "DNI N° Conductor",
          validate: {
            type: 'number',
            min: 8,
            max: 8,
            required: true
          }
        },
        {
          id: "transportista_licenciaConducirConductor",
          name: "Licencia de conducir N°",
          validate: {
            type: 'number',
            required: true
          }
        }
      ],
    },
  ];