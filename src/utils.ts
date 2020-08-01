import { NewDiaryEntry, Weather, Visibility, NewPatientEntry } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    date: parseDate(object.date),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    comment: parseComment(object.comment),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    weather: parseWeather(object.weather),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    visibility: parseVisibility(object.visibility)
  };

  return newEntry;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: any): string => {
  if (!comment || !isString(comment)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing comment: ' + comment);
  }

  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const isWeather = (param: any): param is Weather => {
  return Object.values(Weather).includes(param);
};

const parseWeather = (weather: any): Weather => {
  if (!weather || !isWeather(weather)) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      throw new Error('Incorrect or missing weather: ' + weather);
  }
  return weather;
};

const isVisibility = (param: any): param is Visibility => {
  return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibility: any): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewPatient = (object: any): NewPatientEntry => {
  const newPatient: NewPatientEntry = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    name: parsePatientKey(object.name),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    dateOfBirth: parseDate(object.dateOfBirth),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ssn: parsePatientKey(object.ssn),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    gender: parsePatientKey(object.gender),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    occupation: parsePatientKey(object.occupation)
  };

  return newPatient;
};

const parsePatientKey = (patient: any): string => {
  if (!patient || !isString(patient)) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    throw new Error('Incorrect or missing comment: ' + patient);
  }

  return patient;
};

export default { toNewDiaryEntry, toNewPatient };