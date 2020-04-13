export const SET_ALERTA = 'SET_ALERTA';
export const DESTROY_ALERTA = 'DESTROY_ALERTA';
export const SET_MESSAGE_ALERTA = 'SET_MESSAGE_ALERTA';


export const loading = (message: string) => {
  return {
    type: SET_ALERTA,
    status: 'Cargando...',
    haveClose: false,
    message
  }
}

export const success = (message: string, haveClose = true, options = []) => {
  return {
    type: SET_ALERTA,
    status: 'Correcto',
    message,
    haveClose,
    options
  }
}

export const error = (message: string, haveClose = true, options = []) => {
  return {
    type: SET_ALERTA,
    status: 'Error',
    message,
    haveClose,
    options
  }
}


export const setMessage = (message: string) => {
  return {
    type: SET_MESSAGE_ALERTA,
    message
  }
};

export const destoryAlerta = () => {
  return {
    type: DESTROY_ALERTA
  }
};
