export default [
    {
      id: 'planSilvicultural',
      name: 'Plan Silvicultural',
      fields: [
        {
          id: 'planSilvicultural',
          name: 'Plan Silvicultural',
          component: 'MyTable',
          validate: {
            required: true
          },
          options: {
            columns: [
              {
                name: 'Practica',
                id: 'planSilvicultural_practica',
                validate: {
                  type: 'string',
                  required: true
                }
              },
              {
                name: 'Descripcion',
                id: 'planSilvicultural_descripcion',
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