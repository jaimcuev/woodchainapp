import { Respuesta } from './HelpfulFunctions';
import environment from '../environments';

export const Login = async (email: string, password: string) => {
  return fetch(`${environment.apiURL}/usuario/login`, {
    method: 'POST',
    body: JSON.stringify({email: email, password: password}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => res.json())
  .catch(() => {
    return Respuesta(false, 'Error al conectarse con el servidor.');
  })
  .then( response => {
    if ( !response.message && response.rol ) {
      return Respuesta(true, 'Logeado correctamente.', response);
    } else {
      return Respuesta(false, response.message);
    }
  });
};