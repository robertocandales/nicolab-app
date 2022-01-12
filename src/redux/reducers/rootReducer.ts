import {combineReducers} from 'redux';
import modalReducer from './modalReducer';
import patientReducer from './patientReducer';

export const rootReducer = combineReducers({
  patient: patientReducer,
  modal: modalReducer,
});
