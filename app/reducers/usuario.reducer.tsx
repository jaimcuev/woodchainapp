import { SET_USUARIO, DESTROY_USUARIO } from '../actions/usuario.actions';

const initialState =  { data: {} };

const usuarioReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_USUARIO:
      return {
        data: action.data
      };
    case DESTROY_USUARIO:
      return { data: {} };
    default:
      return state;
  }
}

export default usuarioReducer;