import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const createPOA = async (data: string) => {
  return fetch(`${environment.apiURL}/poa/create`, {
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
      if( response.poaId ) {
        return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response.poaId);
      }
      return Respuesta(false, 'Se ha encontado un error al generar la transacción.');
    });
};

export const findByParentUsuario = async (poaId: string, parentUsuario: string) => {
  return fetch(`${environment.apiURL}/poa/findbyparentusuario`, {
    method: 'POST',
    body: JSON.stringify({ poaId, parentUsuario }),
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