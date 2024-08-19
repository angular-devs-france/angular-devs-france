export interface IEvent {
  title: string;
  description: string;
  date: Date;
  startTime: string;
  youtube?: string;
  link?: string;
  image?: string;
  mode: "onsite" | "online";
  speaker?: string;
  avatars?: string[];
  type: string;
}
