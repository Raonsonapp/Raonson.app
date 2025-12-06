import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ChatGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    // Dummy response (replace with actual API call)
    const botMessage = { id: (Date.now()+1).toString(), text: `Echo: ${userMessage.text}`, sender: 'bot' };
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={item.sender === 'user' ? styles.userText : styles.botText}>{item.text}</Text>
        )}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type a message..."
        style={styles.input}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 5 },
  userText: { alignSelf: 'flex-end', backgroundColor: '#00f', color: '#fff', padding: 8, margin: 5, borderRadius: 5 },
  botText: { alignSelf: 'flex-start', backgroundColor: '#ddd', color: '#000', padding: 8, margin: 5, borderRadius: 5 },
});
