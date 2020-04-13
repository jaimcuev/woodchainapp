import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const createTroza = async (data: string) => {
  return fetch(`${environment.apiURL}/troza/create`, {
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
      if( response.trozaId ) {
        return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response.trozaId);
      }
      return Respuesta(false, 'Se ha encontado un error al generar la transacción.');
    });
};

export const getTroza = async () => {
  return fetch(`${environment.apiURL}/troza/all`)
    .then(res => res.json())
    .catch(() => {
      return Respuesta(false, 'Error al conectarse con el servidor.');
    })
    .then(async response => {
      return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response);
    });
};

export const anexarReportePatio = async (trozaId: string, reporteId: string) => {
  return fetch(`${environment.apiURL}/troza/${trozaId}/anexar/reporte-patio`, {
    method: 'PUT',
    body: JSON.stringify({ reporteId }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .catch(() => {
    return Respuesta(false, 'Error al conectarse con el servidor.');
  })
  .then(async response => {
    return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response);
  });
};
