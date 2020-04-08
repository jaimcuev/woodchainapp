import React from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';
import { registrarLocalReporte } from '../../services/OService';
import { Navigation } from 'react-native-navigation';

const ReportePatioInformacionScreen = (props: any) => {
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
          id: 'informacionGeneral_cubicador',
          name: 'Cubicador',
        },
        {
          id: 'informacionGeneral_supervisor',
          name: 'Supervisor',
        },
        {
          id: 'informacionGeneral_motocierrista',
          name: 'Motocierrista',
        },
        {
          id: 'informacionGeneral_codigoMotocierra',
          name: 'Codigo de motocierra',
        },
        {
          id: 'informacionGeneral_codigoMaquina',
          name: 'Codigo de maquina',
        },
        {
          id: 'informacionGeneral_ayudante1',
          name: 'Ayudante 1',
        },
        {
          id: 'informacionGeneral_ayudante2',
          name: 'Ayudante 2',
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
          id: 'informacionGeneral_combustible',
          name: 'Combustible',
        },
        {
          id: 'informacionGeneral_aceite',
          name: 'Aceite',
        },
        {
          id: 'informacionGeneral_otros',
          name: 'oTROS',
        },
        {
          id: 'informacionGeneral_tipoExtraccion',
          name: 'Tipo de extracción',
        },
        {
          id: 'informacionGeneral_fecha',
          name: 'Fecha',
        },
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
                name: 'Codigo/Carga',
                id: 'informacionDetallada_codigo',
              },
              {
                name: 'Num. Sección',
                id: 'informacionDetallada_numSeccion',
              },
              {
                name: 'Correlativo Troza',
                id: 'informacionDetallada_correlativoTroza',
              },
              {
                name: 'Especie',
                id: 'informacionDetallada_especie',
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
        {
          id: 'informacionDetallada_observacionesGenerales',
          name: 'Observaciones Generales',
        },
      ]
    }
  ];
  const submitForm = (data: any, localData: any) => {
    registrarLocalReporte('ReportePatioInformacion', data, localData)
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

export default ReportePatioInformacionScreen;