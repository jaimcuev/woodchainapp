import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const createGTF = async (data: string) => {
  return fetch(`${environment.apiURL}/gtf/create`, {
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
      if( response.pgmfId ) {
        return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response.pgmfId);
      }
      return Respuesta(false, 'Se ha encontado un error al generar la transacción.');
    });
};