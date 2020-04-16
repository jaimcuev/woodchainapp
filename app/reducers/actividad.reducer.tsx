import { SET_ACTIVIDAD, DESTROY_ACTIVIDAD, SET_DATA_ACTIVIDAD, UPDATE_FORM_VALIDATE } from '../actions/actividad.actions';

const initialState =  { nombre: '', data: {}, formToValidate: [] };

const actividadReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_ACTIVIDAD:
      return {
        ...state,
        nombre: action.nombre,
        formToValidate: action.formToValidate.map( (i: string) => {
          return { name: i, done: false }
        } )
      };
    case SET_DATA_ACTIVIDAD:
      return {
        ...state,
        data: action.data
      }
    case UPDATE_FORM_VALIDATE:
      return {
        ...state,
        formToValidate: action.formToValidate
      }
    case DESTROY_ACTIVIDAD:
      return initialState;
    default:
      return state;
  }
}

export default actividadReducer;