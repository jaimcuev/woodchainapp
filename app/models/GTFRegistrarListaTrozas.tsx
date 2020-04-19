export default [
  {
    id: 'listadoTrozasCuartonesMovilizar',
    name: 'Listado de trozas o cuartones a movilizar',
    fields: [
      {
        id: 'listadoTrozasCuartonesMovilizar_numeroTalonario',
        name: 'Numero de talonario',
      },
      {
        id: 'listadoTrozasCuartonesMovilizar',
        name: 'Listado de trozas o cuartones a movilizar',
        component: 'MyTable',
        options: {
          columns: [
            {
              name: 'Especie',
              id: 'listadoTrozasCuartonesMovilizar_especie',
              subcolumns: [
                {
                  name: 'Nombre Cientifico',
                  id: 'listadoTrozasCuartonesMovilizar_especieNombreCientifico',
                },
                {
                  name: 'Nombre comun o comercial',
                  id: 'listadoTrozasCuartonesMovilizar_especieNombreComunComercial',
                },
              ],
            },
            {
              name: 'Codificación',
              id: 'listadoTrozasCuartonesMovilizar_codificacion',
            },
            {
              name: 'Dimensiones',
              id: 'listadoTrozasCuartonesMovilizar_dimensiones',
              subcolumns: [
                {
                  name: 'D1',
                  id: 'listadoTrozasCuartonesMovilizar_dimensionesD1',
                },
                {
                  name: 'D2',
                  id: 'listadoTrozasCuartonesMovilizar_dimensionesD2',
                },
                {
                  name: 'L',
                  id: 'listadoTrozasCuartonesMovilizar_dimensionesL',
                },
              ],
            },
            {
              name: 'Volúmen m3',
              id: 'listadoTrozasCuartonesMovilizar_volumen',
            },
          ],
        },
      },
      {
        id: 'listadoTrozasCuartonesMovilizar_observaciones',
        name: 'Observaciones',
      },
    ],
  },
];