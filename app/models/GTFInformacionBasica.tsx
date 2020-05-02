export default [
    {
      id: "informacionBasica",
      name: "Información Básica",
      fields: [
        {
          id: "informacionBasica_propietarioProducto",
          name: "Propietario del Producto",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_dniPropietarioProducto",
          name: "DNI N°",
          validate: {
            type: 'number',
            min: 8,
            max: 8,
            required: true
          }
        },
        {
          id: "informacionBasica_rucPropietarioProducto",
          name: "RUC N°",
          validate: {
            type: 'number',
            min: 11,
            max: 11,
            required: true
          }
        },
        {
          id: "informacionBasica_direccionPropietarioProducto",
          name: "Dirección",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_departamentoPropietarioProducto",
          name: "Departamento",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_provinciaPropietarioProducto",
          name: "Provincia",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_distritoPropietarioProducto",
          name: "Distrito",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_tipoComprobanteCompraVenta",
          name: "Tipo de Comprobante de Compra o venta",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_numeroComprobante",
          name: "N° de comprobante",
          validate: {
            type: 'number',
            required: true
          }
        },
        {
          id: "informacionBasica_destinatario",
          name: "Destinatario",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_dniDestinatario",
          name: "DNI N° Destinatario",
          validate: {
            type: 'number',
            min: 8,
            max: 8,
            required: true
          }
        },
        {
          id: "informacionBasica_rucDestinatario",
          name: "RUC N° Destinatario",
          validate: {
            type: 'number',
            min: 11,
            max: 11,
            required: true
          }
        },
        {
          id: "informacionBasica_direccionDestinatario",
          name: "Dirección Destinatario",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_departamentoDestinatario",
          name: "Departamento Destinatario",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_provincia",
          name: "Provincia Destinatario",
          validate: {
            type: 'string',
            required: true
          }
        },
        {
          id: "informacionBasica_distrito",
          name: "Distrito Destinatario",
          validate: {
            type: 'string',
            required: true
          }
        },
      ],
    },
  ];