import React, { useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import MessageBubble from '../components/MessageBubble';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageBubble message={item} />}
      />

      <TextInput
        style={styles.input}
        placeholder="Écrire un message..."
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSend}
        returnKeyType="send"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 25,
    padding: 12,
  },
});
