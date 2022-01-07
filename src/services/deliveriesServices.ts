import axios from 'axios';
import {BASE_API} from '../API';
import {Patient} from '../DTOs/patientType';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const PatientService = {
  getPatientList: async (): Promise<Patient[]> => {
    return client.get('/patients').then(res => {
      return res.data;
    });
  },
  getPatientDetails: async (id: string): Promise<Patient> => {
    const res = await client.get(`/patients/${id}`);
    return res.data;
  },
  postPatientForward: async (value: Patient): Promise<any> => {
    const res = await client.post(`patients/${value.id}/forward`, {});
    return res;
  },
};

export default PatientService;
