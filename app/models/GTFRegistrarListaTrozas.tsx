import { getTrozas } from "../services/TrozaService";

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
        component: 'MyTableDataEntry',
        options: {
          max_rows: 1,
          dataEntry: {
            endpoint: getTrozas,
            texts: [ 
              {
                name: 'ID',
                value: 'id'
              },
              {
                name: 'Seccion',
                value: 'seccion'
              }
            ],
            entry: [
              {
                key: 'especie',
                value: 'listadoTrozasCuartonesMovilizar_especieNombreCientifico'
              },
              {
                key: 'especie',
                value: 'listadoTrozasCuartonesMovilizar_especieNombreComunComercial'
              },
              {
                key: 'id',
                value: 'listadoTrozasCuartonesMovilizar_codificacion'
              }
            ]
          },
          columns: [
            {
              name: 'Especie',
              id: 'listadoTrozasCuartonesMovilizar_especie',
              subcolumns: [
                {
                  name: 'Nombre Cientifico',
                  id: 'listadoTrozasCuartonesMovilizar_especieNombreCientifico',
                  readonly: true,
                },
                {
                  name: 'Nombre comun o comercial',
                  id: 'listadoTrozasCuartonesMovilizar_especieNombreComunComercial',
                  readonly: true,
                },
              ],
            },
            {
              name: 'Codificación',
              id: 'listadoTrozasCuartonesMovilizar_codificacion',
              readonly: true,
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
