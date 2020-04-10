import { SET_ACTIVIDAD, DESTROY_ACTIVIDAD, SET_DATA_ACTIVIDAD } from '../actions/actividad.actions';

const initialState =  { nombre: '', data: {} };

const actividadReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_ACTIVIDAD:
      return {
        ...state,
        nombre: action.nombre
      };
    case SET_DATA_ACTIVIDAD:
      return {
        ...state,
        data: action.data
      }
    case DESTROY_ACTIVIDAD:
      return initialState;
    default:
      return state;
  }
}

export default actividadReducer;