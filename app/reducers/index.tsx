import {combineReducers} from 'redux';
import alertaReducer from './alerta.reducer';
import usuarioReducer from './usuario.reducer';
import anexoReducer from './anexo.reducer';
import actividadReducer from './actividad.reducer';

export default combineReducers({
  alerta: alertaReducer,
  usuario: usuarioReducer,
  anexo: anexoReducer,
  actividad: actividadReducer
})