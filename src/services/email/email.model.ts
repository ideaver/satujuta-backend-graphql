export interface Email {
  from: string;
  to: string;
  subject: string;
  text: string;
  [key: string]: any;
}
