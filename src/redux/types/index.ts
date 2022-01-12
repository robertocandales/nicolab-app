import {Patient} from '../../config/DTOs/patientType';

export const PATIENT_LIST_LOADING = 'PATIENT_LIST_LOADING';
export const PATIENT_LIST_SUCCESS = 'PATIENT_LIST_SUCCESS';
export const PATIENT_LIST_FAIL = 'PATIENT_FAIL';

export const IS_LOADING = 'IS_LOADING';

export const PATIENT_LOADING = 'PATIENT_LOADING';
export const PATIENT_SUCCESS = 'PATIENT_SUCCESS';
export const PATIENT_FAIL = 'PATIENT_FAIL';

export const FORWARD_LOADING = 'FORWARD_LOADING';
export const FORWARD_SUCCESS = 'FORWARD_SUCCESS';
export const FORWARD_FAIL = 'FORWARD_FAIL';

export interface PatienListLoading {
  type: typeof PATIENT_LIST_LOADING;
}

export interface PatientListFail {
  type: typeof PATIENT_LIST_FAIL;
}

export interface PatientListSuccess {
  type: typeof PATIENT_LIST_SUCCESS;
  payload: Patient[];
}

export interface PatientLoading {
  type: typeof PATIENT_LOADING;
}

export interface PatientFail {
  type: typeof PATIENT_FAIL;
}

export interface PatientSuccess {
  type: typeof PATIENT_SUCCESS;
  payload: Patient;
}

export interface ForwardLoading {
  type: typeof FORWARD_LOADING;
}

export interface ForwardFail {
  type: typeof FORWARD_FAIL;
}

export interface ForwardSuccess {
  type: typeof FORWARD_SUCCESS;
  payload: Patient | any;
}
export type PatientListDispatchTypes =
  | PatienListLoading
  | PatientListFail
  | PatientListSuccess;

export type PatientDispatchTypes =
  | PatientLoading
  | PatientFail
  | PatientSuccess;

export type ForwardDispatchTypes =
  | ForwardLoading
  | ForwardFail
  | ForwardSuccess;
