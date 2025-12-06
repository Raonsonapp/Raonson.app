import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const dummyData = [
  { id: '1', name: 'Naruto' },
  { id: '2', name: 'Boruto' },
  { id: '3', name: 'Demon Slayer' },
];

export default function Search() {
  const [query, setQuery] = useState('');
  const filtered = dummyData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search..." value={query} onChangeText={setQuery} />
      <FlatList data={filtered} keyExtractor={item => item.id} renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
