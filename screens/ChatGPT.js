import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ChatGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const newMsg = { text: input, fromUser: true };
    setMessages([...messages, newMsg]);
    setInput('');

    try {
      const res = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: input,
        max_tokens: 100
      }, { headers: { 'Authorization': 'Bearer YOUR_API_KEY' } });
      setMessages(prev => [...prev, { text: res.data.choices[0].text, fromUser: false }]);
    } catch (err) { console.log(err); }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages}>
        {messages.map((m, i) => <Text key={i} style={m.fromUser ? styles.userMsg : styles.botMsg}>{m.text}</Text>)}
      </ScrollView>
      <TextInput style={styles.input} placeholder="Type..." value={input} onChangeText={setInput} />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  messages: { flex: 1 },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#00f', color: '#fff', padding: 8, borderRadius: 5, marginVertical: 2 },
  botMsg: { alignSelf: 'flex-start', backgroundColor: '#ccc', color: '#000', padding: 8, borderRadius: 5, marginVertical: 2 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginVertical: 5 },
});
