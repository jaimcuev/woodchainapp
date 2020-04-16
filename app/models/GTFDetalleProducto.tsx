export default [
  {
    id: 'detalleProducto',
    name: 'Detalle del producto',
    fields: [
      {
        id: 'detalleProducto_listaTrozas',
        name: 'Lista (s) de Trozas N°',
      },
      {
        id: 'detalleProducto_numeroGtfOrigen',
        name: 'N° GTF de origen',
      },
      {
        id: 'detalleProducto',
        name: 'Detalle del producto (tabla)',
        component: 'MyTable',
        options: {
          columns: [
            {
              name: 'Nombre Científico',
              id: 'detalleProducto_nombreCientifico',
            },
            {
              name: 'Nombre común o comercial',
              id: 'detalleProducto_nombreComunComercial',
            },
            {
              name: 'Tipo de producto',
              id: 'detalleProducto_tipoProducto',
            },
            {
              name: 'Forma de embalaje o presentación del producto',
              id: 'detalleProducto_formaEmbalajePresentacionProducto',
              subcolumns: [
                {
                  name: 'Descripción',
                  id: 'detalleProducto_formaEmbalajePresentacionProductoDescripcion',
                },
                {
                  name: 'Cantidad',
                  id: 'detalleProducto_formaEmbalajePresentacionProductoCantidad',
                },
              ],
            },
            {
              name: 'Cantidad',
              id: 'detalleProducto_cantidad',
              subcolumns: [
                {
                  name: 'Unidad de medida',
                  id: 'detalleProducto_cantidadUnidadMedida',
                },
                {
                  name: 'Cantidad',
                  id: 'detalleProducto_cantidadTotal',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'detalleProducto_observaciones',
        name: 'Observaciones',
      },
    ],
  },
];
