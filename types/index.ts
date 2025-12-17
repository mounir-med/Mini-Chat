export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
};

export type ChatState = {
  messages: Message[];
};
