import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ message }) {
  const isUser = message.sender === 'user';

  return (
    <View style={[styles.bubble, isUser ? styles.right : styles.left]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 15,
    marginVertical: 5,
  },
  left: {
    backgroundColor: '#E5E7EB',
    alignSelf: 'flex-start',
  },
  right: {
    backgroundColor: '#3B82F6',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#000',
  },
});
