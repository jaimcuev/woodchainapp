export const SET_ANEXO = 'SET_ANEXO';
export const DESTROY_ANEXO = 'DESTROY_ANEXO';

export const setAnexo = (data: any) => {
  return {
    type: SET_ANEXO,
    data
  }
};

export const destroyAnexo = () => {
  return {
    type: DESTROY_ANEXO
  }
};