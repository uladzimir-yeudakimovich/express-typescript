import { NewDiaryEntry, Weather, Visibility } from './types';

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

export default toNewDiaryEntry;