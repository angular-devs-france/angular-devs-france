export interface Evenement {
  title: string;
  description: string;
  date: string;
  startTime: string;
  youtube?: string;
  link?: string;
  image: string;
  mode: 'onsite' | 'online';
}
