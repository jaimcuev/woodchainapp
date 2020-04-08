import { SET_ACTIVIDAD, DESTROY_ACTIVIDAD } from '../actions/actividad.actions';

const initialState =  { nombre: '' };

const actividadReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_ACTIVIDAD:
      return {
        nombre: action.nombre
      };
    case DESTROY_ACTIVIDAD:
      return initialState;
    default:
      return state;
  }
}

export default actividadReducer;