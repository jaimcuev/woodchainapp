import { SET_ALERTA, DESTROY_ALERTA, SET_MESSAGE_ALERTA } from '../actions/alerta.actions';

const initialState =  { status: '', message: '', options: [], isVisible: false, haveClose: false };

const alertaReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_ALERTA:
      return {
        message: action.message, 
        status: action.status,
        options: action.options || [],
        isVisible: true,
        haveClose: action.haveClose
      };
    case SET_MESSAGE_ALERTA:
      return Object.assign({}, state, {
        message: action.message
      })
    case DESTROY_ALERTA:
      return initialState;
    default:
      return state;
  }
}

export default alertaReducer;