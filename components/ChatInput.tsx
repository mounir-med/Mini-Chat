import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim().length === 0) {
      return;
    }
    onSendMessage(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Écris un message..."
        placeholderTextColor="#999"
        value={text}
        onChangeText={setText}
        multiline
        maxLength={500}
      />
      <TouchableOpacity
        style={[
          styles.sendButton,
          text.trim().length === 0 && styles.sendButtonDisabled,
        ]}
        onPress={handleSend}
        disabled={text.trim().length === 0}
      >
        <Text style={styles.sendButtonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
