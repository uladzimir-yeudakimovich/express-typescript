import patients from '../../data/patients';

import { NonSensitivePatients, NewPatientEntry } from '../types';

const getPatients = (): NonSensitivePatients[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatientEntry): NonSensitivePatients => {
  const NewPatient = {
    id: (new Date()).toString(),
    ...entry
  };

  patients.push(NewPatient);
  return NewPatient;
};

export default {
  getPatients,
  addPatient
};