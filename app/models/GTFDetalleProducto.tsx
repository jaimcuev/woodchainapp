export default [
  {
    id: 'detalleProducto',
    name: 'Detalle del producto',
    fields: [
      {
        id: 'detalleProducto_listaTrozas',
        name: 'Lista (s) de Trozas N°',
        validate: {
          required: true
        }
      },
      {
        id: 'detalleProducto_numeroGtfOrigen',
        name: 'N° GTF de origen',
        validate: {
          required: true
        }
      },
      {
        id: 'detalleProducto',
        name: 'Detalle del producto (tabla)',
        component: 'MyTable',
        validate: {
          required: true
        },
        options: {
          columns: [
            {
              name: 'Nombre Científico',
              id: 'detalleProducto_nombreCientifico',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              name: 'Nombre común o comercial',
              id: 'detalleProducto_nombreComunComercial',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              name: 'Tipo de producto',
              id: 'detalleProducto_tipoProducto',
              validate: {
                type: 'string',
                required: true
              }
            },
            {
              name: 'Forma de embalaje o presentación del producto',
              id: 'detalleProducto_formaEmbalajePresentacionProducto',
              validate: {
                required: true
              },
              subcolumns: [
                {
                  name: 'Descripción',
                  id: 'detalleProducto_formaEmbalajePresentacionProductoDescripcion',
                  validate: {
                    required: true
                  }
                },
                {
                  name: 'Cantidad',
                  id: 'detalleProducto_formaEmbalajePresentacionProductoCantidad',
                  validate: {
                    type: 'number',
                    min: 0,
                    required: true
                  }
                },
              ],
            },
            {
              name: 'Cantidad',
              id: 'detalleProducto_cantidad',
              validate: {
                required: true
              },
              subcolumns: [
                {
                  name: 'Unidad de medida',
                  id: 'detalleProducto_cantidadUnidadMedida',
                  validate: {
                    type: 'string',
                    required: true
                  }
                },
                {
                  name: 'Cantidad',
                  id: 'detalleProducto_cantidadTotal',
                  validate: {
                    type: 'number',
                    min: 0,
                    required: true
                  }
                },
              ],
            },
          ],
        },
      },
      {
        id: 'detalleProducto_observaciones',
        name: 'Observaciones',
        validate: {
          type: 'string',
          required: true
        }
      },
    ],
  },
];
