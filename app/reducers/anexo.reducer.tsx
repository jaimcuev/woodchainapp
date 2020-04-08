import { SET_ANEXO, DESTROY_ANEXO } from '../actions/anexo.actions';

const initialState =  { data: {} };

const anexoReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_ANEXO:
      return {
        ...state,
        data: action.data
      };
    case DESTROY_ANEXO:
      return {
        ...state,
        data: {}
      };
    default:
      return state;
  }
}

export default anexoReducer;