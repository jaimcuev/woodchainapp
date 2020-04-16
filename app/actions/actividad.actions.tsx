export const SET_ACTIVIDAD = 'SET_ACTIVIDAD';
export const SET_DATA_ACTIVIDAD = 'SET_DATA_ACTIVIDAD';
export const DESTROY_ACTIVIDAD = 'DESTROY_ACTIVIDAD';
export const UPDATE_FORM_VALIDATE = 'UPDATE_FORM_VALIDATE';

export const setActividad = (nombre: string, formToValidate: any = []) => {
  return {
    type: SET_ACTIVIDAD,
    nombre,
    formToValidate
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

export const updateFormValidate = (formToValidate: any) => {
  return {
    type: UPDATE_FORM_VALIDATE,
    formToValidate
  }
};
