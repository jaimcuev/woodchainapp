import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const getEmpresasTaladoras = async () => {
  return fetch(`${environment.apiURL}/usuario/rol/EmpresaTaladora`)
  .then(res => res.json())
  .catch(() => {
    return Respuesta(false, 'Error al conectarse con el servidor.');
  }).then( response => {
    if( response.status === false ) {
      return Respuesta(false, response.message);
    } else {
      return Respuesta(true, 'Error al conectarse con el servidor.', response);
    }
  });
};