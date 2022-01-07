import {combineReducers} from 'redux';
import patientReducer from './patientReducer';

export const rootReducer = combineReducers({
  patient: patientReducer,
});
