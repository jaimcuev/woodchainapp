export const SET_ACTIVIDAD = 'SET_ACTIVIDAD';
export const DESTROY_ACTIVIDAD = 'DESTROY_ACTIVIDAD';

export const setActividad = (nombre: string) => {
  return {
    type: SET_ACTIVIDAD,
    nombre
  }
};

export const destroyActividad = () => {
  return {
    type: DESTROY_ACTIVIDAD
  }
};