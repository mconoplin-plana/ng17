export enum Time {
  FiveMinutes = 5,
  OneDay = 1440,
  OneWeek = 10080,
  OneMonth = 43200,
}

export interface TimeInfo {
  id: Time,
  name: string;
}
