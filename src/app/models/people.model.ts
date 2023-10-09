export interface People {
  name: string;
  active: boolean;
  job: string;
  company: string;
  picture: string;
  socials: {[key: string]: string}[];
}
