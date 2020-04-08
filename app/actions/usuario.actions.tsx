export const SET_USUARIO = 'SET_USUARIO';
export const DESTROY_USUARIO = 'DESTROY_USUARIO';

export const setUsuario = (data: any) => {
  return {
    type: SET_USUARIO,
    data
  }
};

export const destroyUsuario = () => {
  return {
    type: DESTROY_USUARIO
  }
};