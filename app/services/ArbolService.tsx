import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const createArbol = async (data: string) => {
  return fetch(`${environment.apiURL}/arbol/create`, {
    method: 'POST',
    body: JSON.stringify({ data: data }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .catch(() => {
    console.warn(`${environment.apiURL}/arbol/create`);
    return Respuesta(false, 'Error al conectarse con el servidor.');
  })
  .then(async response => {
    return Respuesta(true, 'Se ha generado la transacción de manera exitosa.');
  });
};

export const getArbolesPOA = async (poaId: string) => {
  return fetch(`${environment.apiURL}/arbol/poa/${poaId}`)
    .then(res => res.json())
    .catch(() => {
      return Respuesta(false, 'Error al conectarse con el servidor.');
    })
    .then(async response => {
      return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response);
    });
};