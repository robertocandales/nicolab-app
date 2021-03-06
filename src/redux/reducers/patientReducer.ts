import {
  PATIENT_LIST_LOADING,
  PATIENT_LIST_SUCCESS,
  PATIENT_LIST_FAIL,
  PATIENT_LOADING,
  PATIENT_SUCCESS,
  PATIENT_FAIL,
  FORWARD_LOADING,
  FORWARD_SUCCESS,
  FORWARD_FAIL,
  PatientListDispatchTypes,
  PatientDispatchTypes,
  ForwardDispatchTypes,
} from '../types';
import {Patient} from '../../config/DTOs/patientType';

interface IinitialState {
  patient: Patient[];
  details: any;
  loading: boolean;
  error: boolean;
}

const initialState: IinitialState = {
  patient: [],
  details: {},
  loading: false,
  error: false,
};
const patientReducer = (
  state: IinitialState = initialState,
  action:
    | PatientListDispatchTypes
    | PatientDispatchTypes
    | ForwardDispatchTypes,
): IinitialState => {
  switch (action.type) {
    case PATIENT_LIST_FAIL:
      return {...state, loading: false, error: true};
    case PATIENT_LIST_LOADING:
      return {...state, loading: true};
    case PATIENT_LIST_SUCCESS:
      return {...state, loading: false, patient: action.payload, error: false};
    case PATIENT_FAIL:
      return {...state, loading: false, error: true};
    case PATIENT_LOADING:
      return {...state, loading: true};
    case PATIENT_SUCCESS:
      return {...state, loading: false, details: action.payload};
    case FORWARD_FAIL:
      return {...state, loading: false, error: true};
    case FORWARD_LOADING:
      return {...state, loading: true};
    case FORWARD_SUCCESS:
      return {
        ...state,
        loading: false,
        patient: state.patient.map(item =>
          item.id === action.payload.id ? {...item, isForwarded: true} : item,
        ),
        details: {...state.details, isForwarded: true},
        error: false,
      };
    default:
      return state;
  }
};

export default patientReducer;
