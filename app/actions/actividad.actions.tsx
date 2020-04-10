export const SET_ACTIVIDAD = 'SET_ACTIVIDAD';
export const SET_DATA_ACTIVIDAD = 'SET_DATA_ACTIVIDAD';
export const DESTROY_ACTIVIDAD = 'DESTROY_ACTIVIDAD';

export const setActividad = (nombre: string) => {
  return {
    type: SET_ACTIVIDAD,
    nombre
  }
};

export const setDataActividad = (data: any) => {
  return {
    type: SET_DATA_ACTIVIDAD,
    data
  }
};

export const destroyActividad = () => {
  return {
    type: DESTROY_ACTIVIDAD
  }
};