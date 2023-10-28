export interface Evenement {
  title: string;
  description: string;
  date: string;
  youtube?: string;
  link?: string;
  image: string;
  mode: 'onsite' | 'online';
}
