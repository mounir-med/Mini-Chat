import { Message } from '@/types/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'minichat_messages';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load messages from storage on mount
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        // Initialize with welcome message
        const welcomeMessage: Message = {
          id: '0',
          text: 'Bienvenue dans MiniChat! Comment ça va?',
          sender: 'bot',
          timestamp: Date.now(),
        };
        setMessages([welcomeMessage]);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([welcomeMessage]));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (text: string) => {
    if (text.trim().length === 0) {
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: Date.now(),
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    // Persist to storage
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMessages));
    } catch (error) {
      console.error('Error saving message:', error);
    }

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'C\'est un message automatique. Tu as dit: ' + text,
        sender: 'bot',
        timestamp: Date.now(),
      };
      const finalMessages = [...updatedMessages, botResponse];
      setMessages(finalMessages);
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(finalMessages));
    }, 500);
  };

  const clearMessages = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setMessages([]);
    } catch (error) {
      console.error('Error clearing messages:', error);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
}
