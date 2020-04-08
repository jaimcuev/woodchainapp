import React from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { registrarLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';

const ReporteArrastreInformacionScreen = (props: any) => {
  const steps = [
    {
      id: 'informacionGeneral',
      name: 'Informacion General',
      fields: [
        {
          id: 'informacionGeneral_nombreConcesion',
          name: 'Nombre de la concesion o titular',
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
          id: 'informacionGeneral_operaddor',
          name: 'Operador',
        },
        {
          id: 'informacionGeneral_codigoMaquina',
          name: 'Codigo de maquina',
        },
        {
          id: 'informacionGeneral_fecha',
          name: 'Fecha',
        },
        {
          id: 'informacionGeneral_ayudante',
          name: 'Ayudante',
        },
        {
          id: 'informacionGeneral_aceite1',
          name: 'Aceite 1',
        },
        {
          id: 'informacionGeneral_aceite2',
          name: 'Aceite 2',
        },
        {
          id: 'informacionGeneral_aceite3',
          name: 'Aceite 3',
        },
        {
          id: 'informacionGeneral_turno',
          name: 'Turno',
        },
        {
          id: 'informacionGeneral_horometroInicio',
          name: 'Horometro Inicio',
        },
        {
          id: 'informacionGeneral_horometroFinal',
          name: 'Horometro Final',
        },
        {
          id: 'informacionGeneral_petroleo',
          name: 'Petroleo',
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
                name: 'Codigo/Arbol',
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
                name: 'VOL m3',
                id: 'informacionDetallada_VOLm3',
              },
              {
                name: 'Patio',
                id: 'informacionDetallada_patio',
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
  const submitForm = (data: any, localData: any) => {
    registrarLocalReporte('ReporteArrastreInformacion', data, localData)
    .then( status => {
      Navigation.pop(props.componentId);
    } );
  };
  return (
    <Container>
      <Form 
        local={props.data || {}} 
        submitForm={submitForm} 
        steps={steps}
      />
    </Container>
  );
};

export default ReporteArrastreInformacionScreen;