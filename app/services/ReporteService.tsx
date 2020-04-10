import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const createReporte = async (data: string) => {
  return fetch(`${environment.apiURL}/reporte/create`, {
    method: 'POST',
    body: JSON.stringify({ data: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .catch(() => {
    return Respuesta(false, 'Error al conectarse con el servidor.');
  })
  .then(async response => {
    if( response.reporteId ) {
      return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response.reporteId);
    }
    return Respuesta(false, 'Se ha encontado un error al generar la transacción.');
  });
};

export const getReporte = async () => {
  return fetch(`${environment.apiURL}/reporte/all`)
    .then(res => res.json())
    .catch(() => {
      return Respuesta(false, 'Error al conectarse con el servidor.');
    })
    .then(async response => {
      return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response);
    });
};