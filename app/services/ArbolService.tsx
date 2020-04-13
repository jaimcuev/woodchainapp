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

export const anexarReporteTala = async (arbolId: string, reporteId: string) => {
  return fetch(`${environment.apiURL}/arbol/${arbolId}/anexar/reporte-tala`, {
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

export const anexarReporteArrastre = async (arbolId: string, reporteId: string) => {
  return fetch(`${environment.apiURL}/arbol/${arbolId}/anexar/reporte-arrastre`, {
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

export const getArbolesPOATipoReporte = async (poaId: string, tipoReporte: string) => {
  return fetch(`${environment.apiURL}/arbol/poa/${poaId}/reporte/${tipoReporte}`)
  .then(res => res.json())
  .catch(() => {
    return Respuesta(false, 'Error al conectarse con el servidor.');
  })
  .then(async response => {
    return Respuesta(true, 'Se ha generado la transacción de manera exitosa.', response);
  });
};

export const trozadoArbol = async (arbolId: string) => {
  return fetch(`${environment.apiURL}/arbol/${arbolId}/trozar`, {
    method: 'PUT',
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