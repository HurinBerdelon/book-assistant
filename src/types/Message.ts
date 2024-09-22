export interface Message {
  sender: "user" | "system";
  content: string;
}
