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
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import PatientService from '../../config/services/patientServices';
import {Dispatch} from 'redux';

export const getPatientListAction =
  () => async (dispatch: Dispatch<PatientListDispatchTypes>) => {
    try {
      dispatch({
        type: PATIENT_LIST_LOADING,
      });
      const res: Patient[] = await PatientService.getPatientList();

      dispatch({
        type: PATIENT_LIST_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: PATIENT_LIST_FAIL,
      });
    }
  };

export const getPatientDetails =
  (id: string) => async (dispatch: Dispatch<PatientDispatchTypes>) => {
    try {
      dispatch({
        type: PATIENT_LOADING,
      });
      const res = await PatientService.getPatientDetails(id);

      dispatch({
        type: PATIENT_SUCCESS,
        payload: res,
      });
    } catch (e) {
      dispatch({
        type: PATIENT_FAIL,
      });
    }
  };

export const postPatientForwarded =
  (value: Patient, navigation: NavigationProp<ParamListBase>) =>
  async (dispatch: Dispatch<ForwardDispatchTypes>) => {
    try {
      dispatch({
        type: FORWARD_LOADING,
      });
      const res = await PatientService.postPatientForward(value);
      /** should be the endpoint response */
      const resPostRequest: Patient = value;
      dispatch({
        type: FORWARD_SUCCESS,
        payload: resPostRequest,
      });
      navigation.navigate('PatientList');
    } catch (e) {
      dispatch({
        type: FORWARD_FAIL,
      });
    }
  };
